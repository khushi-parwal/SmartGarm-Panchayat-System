const express = require('express');
const multer = require('multer');
const path = require('path');
const Complaint = require('../models/Complaint');



const router = express.Router();


// Middleware to ensure user is authenticated
// const ensureAuthenticated = (req, res, next) => {
//     if (req.session && req.session.userId) {
//       next();
//     } else {
//       res.status(401).json({ message: 'Unauthorized: Please log in.' });
//     }
//   };

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});


const upload = multer({ storage });


    
router.post('/complaint', upload.fields([{ name: 'idProof' }, { name: 'photo' }]), async (req, res) => {
    try {
        
        const { username, phone, address, email, complaintType, complaintDetails } = req.body;
        const idProof = req.files.idProof[0].path;
        const photo = req.files.photo[0].path;

        const newComplaint = new Complaint({ 
            userId: req.session.userId, username, phone, address, email, complaintType, complaintDetails, idProof, photo 
        });

        await newComplaint.save();
        res.status(201).json({ message: 'Complaint submitted successfully!' });
    } catch (error) {
        res.status(500).json({ error: 'Error submitting complaint' });
    }
});



// GET route to fetch all complaints
router.get('/displaycomplaint', async (req, res) => {
    try {
        const complaints = await Complaint.find();
        res.json(complaints);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching complaints' });
    }
});



module.exports = router;



