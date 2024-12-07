// const express = require('express');
// const router = express.Router();
// const jwt = require('jsonwebtoken');
// const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');

// router.use(bodyParser.json());
// router.use(cookieParser());

// const SECRET_KEY = 'your_secret_key';

// // Mock user data (replace with actual user validation logic)
// const user = { username: 'testuser', password: 'testpass' };

// // Login Route
// router.post('/login', (req, res) => {
//   const { username, password } = req.body;
  
//   if (username === user.username && password === user.password) {
//     // Generate token and send it as a cookie
//     const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
//     res.cookie('token', token, { httpOnly: true });
//     res.status(200).json({ message: 'Login successful' });
//   } else {
//     res.status(401).json({ message: 'Invalid username or password' });
//   }
// });

// // Logout Route
// router.post('/logout', (req, res) => {
//   // Clear the token cookie
//   res.clearCookie('token');
//   res.status(200).json({ message: 'Logged out successfully' });
// });

// module.exports = router;
