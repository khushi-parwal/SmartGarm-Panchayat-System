const express = require('express');
const multer = require('multer');
const path = require('path');
const Application = require('./../models/Application');


const router = express.Router();



// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Route to handle form submission
router.post('/new-connection', upload.single('idProof'), async (req, res) => {
  const { username, phone, address, email, connectionType, installationDate } = req.body;
  const idProof = req.file ? req.file.path : null;
  // const idProof = req.file ? req.file.path : null;


  try {
    const newApplication = new Application({
      username,
      phone,
      address,
      email,
      connectionType,
      installationDate,
      idProof: idProof,
    });

    await newApplication.save();
    res.status(200).json({ message: 'Application submitted successfully!' });
  } catch (error) {
    console.error('Error saving application:', error);
    res.status(500).json({ message: 'Error submitting application' });
  }
});

// Route to get all applications
router.get('/applications', async (req, res) => {
    try {
      const applications = await Application.find();
      
      // Map applications to include the full URL for the idProof
      const applicationsWithImageURL = applications.map((application) => ({
        ...application._doc,
        idProof: application.idProof ? `http://localhost:3000/${application.idProof}` : null,
      }));
      res.status(200).json(applicationsWithImageURL);
    } catch (error) {
      console.error('Error fetching applications:', error);
      res.status(500).json({ message: 'Error fetching applications' });
    }
  });
  

module.exports = router;
