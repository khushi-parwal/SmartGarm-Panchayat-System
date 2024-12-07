const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

// POST /register
router.post('/register', async (req, res) => {
  const { name, aadhar, phone, email, address, gender, wardno, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    // Validate request
    if (!name || !aadhar || !phone || !email || !address || !gender || !wardno || !password) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ $or: [{ email }, { phone }, { aadhar }] });
    if (existingUser) {
      return res.status(409).json({ error: 'User already exists with the same email, phone, or aadhar.' });
    }

    // Create new user
    const newUser = new User({ name, aadhar, phone, email, address, gender, wardno, password:hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully!', userId: newUser._id });
  } catch (err) {
    console.error('Error during registration:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
