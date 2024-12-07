const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
// POST /login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Validate input
    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required.' });
    }

    // Find user by username
    const user = await User.findOne({ name: username });
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    // Validate password
    // if (user.password !== password) {
    //   return res.status(401).json({ message: 'Incorrect password.' });
    // }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Incorrect password' });
    }

    // Successful login
    res.status(200).json({ message: 'Login successful', userId: user._id });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// POST /logout
router.post('/logout', (req, res) => {
  // Simulate logout by clearing client-side session data
  res.status(200).json({ message: 'Logged out successfully' });
});

module.exports = router;
