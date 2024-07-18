const Member = require('../models/memberModel');

// Get all members
exports.getAllMembers = async (req, res) => {
  try {
    const members = await Member.findAll();
    res.json(members);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a member by ID
exports.getMemberById = async (req, res) => {
  try {
    const member = await Member.findByPk(req.params.id);
    if (member) {
      res.json(member);
    } else {
      res.status(404).json({ error: 'Member not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new member
exports.createMember = async (req, res) => {
  try {
    const { name, email, phone, dob, point } = req.body;
    const newMember = await Member.create({ name, email, phone, dob, point });
    res.status(201).json(newMember);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a member
exports.updateMember = async (req, res) => {
  try {
    const memberId = req.params.id;
    const { name, email, phone, dob, point } = req.body;
    const [updated] = await Member.update({ name, email, phone, dob, point }, {
      where: { id: memberId }
    });
    if (updated) {
      const updatedMember = await Member.findByPk(memberId);
      res.json(updatedMember);
    } else {
      res.status(404).json({ error: 'Member not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a member
exports.deleteMember = async (req, res) => {
  try {
    const memberId = req.params.id;
    const deleted = await Member.destroy({
      where: { id: memberId }
    });
    if (deleted) {
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Member not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};