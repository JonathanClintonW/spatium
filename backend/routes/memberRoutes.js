const express = require('express');
const router = express.Router();
const memberController = require('../controllers/memberController');

// Get all members
router.get('/', memberController.getAllMembers);

// Get a member by ID
router.get('/:id', memberController.getMemberById);

// Create a new member
router.post('/', memberController.createMember);

// Update a member
router.put('/:id', memberController.updateMember);

// Delete a member
router.delete('/:id', memberController.deleteMember);

module.exports = router;
