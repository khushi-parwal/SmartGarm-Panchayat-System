


// const express = require('express');
// const bcrypt = require('bcrypt');
// const Admin = require('../models/Admin');

// const router = express.Router();

// // Admin Login Route
// router.post('/adminlogin', async (req, res) => {

// const createAdmin = async () => {
//   const username = 'admin'; // change this as needed
//   const password = 'password123'; // change this as needed

//   const hashedPassword = await bcrypt.hash(password, 10);

//   const newAdmin = new Admin({
//     username,
//     password: hashedPassword,
//   });

//   // const { username, password } = req.body;

//   try {
//     // Find admin by username
//     const admin = await Admin.findOne({ username });
//     if (!admin) {
//       return res.status(400).json({ message: 'Username not found' });
//     }

//     // Compare password with hashed password in the database
//     const isMatch = await bcrypt.compare(password, admin.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: 'Invalid password' });
//     }

//     // If login is successful
//     res.status(200).json({ message: 'Login successful' });
//   } catch (error) {
//     console.error('Login error:', error);
//     res.status(500).json({ message: 'Server error' });
//   }
// }
// });

// module.exports = router;


const express = require('express');
const bcrypt = require('bcrypt');
const Admin = require('../models/Admin');

const router = express.Router();

// Predefined admin credentials
const DEFAULT_ADMIN_USERNAME = 'admin'; // Change this as needed
const DEFAULT_ADMIN_PASSWORD = 'password123'; // Change this as needed

// Function to create a default admin if it doesn't exist
const createAdmin = async () => {
  try {
    const existingAdmin = await Admin.findOne({ username: DEFAULT_ADMIN_USERNAME });
    if (!existingAdmin) {
      const hashedPassword = await bcrypt.hash(DEFAULT_ADMIN_PASSWORD, 10);
      const newAdmin = new Admin({
        username: DEFAULT_ADMIN_USERNAME,
        password: hashedPassword,
      });
      await newAdmin.save();
      // console.log('Default admin created successfully.');
    } 
  } catch (error) {
    console.error('Error creating default admin:', error);
  }
};

// Ensure the default admin is set up
createAdmin();

// Admin Login Route
router.post('/adminlogin', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  try {
    // Find admin by username
    const admin = await Admin.findOne({ username });
    if (!admin) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    // Compare password with hashed password in the database
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    // If login is successful
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
