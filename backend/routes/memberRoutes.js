const express = require('express');
const router = express.Router();
const connection = require('../db');

// Get all members
router.get('/', (req, res) => {
    connection.query('SELECT * FROM members', (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(results);
        }
    });
});

// Get a member by ID
router.get('/:id', (req, res) => {
    const memberId = req.params.id;
    connection.query('SELECT * FROM members WHERE id = ?', [memberId], (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(results[0]);
        }
    });
});

// Create a new member
router.post('/', (req, res) => {
    const { name, email, phone, dob } = req.body;
    const newMember = { name, email, phone, dob };
    connection.query('INSERT INTO members SET ?', newMember, (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(201).json({ id: results.insertId, ...newMember });
        }
    });
});

// Update a member
router.put('/:id', (req, res) => {
    const memberId = req.params.id;
    const { name, email, phone, dob } = req.body;
    const updatedMember = { name, email, phone, dob };
    connection.query('UPDATE members SET ? WHERE id = ?', [updatedMember, memberId], (err) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ id: memberId, ...updatedMember });
        }
    });
});

// Delete a member
router.delete('/:id', (req, res) => {
    const memberId = req.params.id;
    connection.query('DELETE FROM members WHERE id = ?', [memberId], (err) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(204).end();
        }
    });
});

module.exports = router;
