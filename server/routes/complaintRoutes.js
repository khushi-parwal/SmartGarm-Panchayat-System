const express = require('express');
const multer = require('multer');
const Complaint = require('../models/Complaint');
 const authenticateUser = require('./middleware/authenticateUser');

const router = express.Router();

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
            username, phone, address, email, complaintType, complaintDetails, idProof, photo 
        });

        await newComplaint.save();
        res.status(201).json({ message: 'Complaint submitted successfully!' });
    } catch (error) {
        res.status(500).json({ error: 'Error submitting complaint' });
    }
});


router.get('/displaycomplaint', async (req, res) => {
    try {
        const complaints = await Complaint.find();
        res.json(complaints);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching complaints' });
    }
});

router.get('/complaints/:userId', authenticateUser, async (req, res) => {
const { userId } = req.params;
  console.log("Received userId:", userId);

  try {
    const complaints = await Complaint.find({userId});
    console.log("Found complaints:", complaints);
    if (!complaints.length) {
      return res.status(404).json({ message: 'No complaints found.' });
    }
    res.status(200).json(complaints);
  } catch (err) {
    console.error('Error fetching complaints:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;




// const express = require('express');
// const multer = require('multer');
// const Complaint = require('../models/Complaint');
// const authenticateUser = require('./middleware/authenticateUser');

// const router = express.Router();

// // Multer setup for file uploads
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => cb(null, 'uploads/'),
//     filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
// });
// const upload = multer({ storage });

// // Route to register a complaint
// router.post(
//     '/complaint',
//     authenticateUser,
//     upload.fields([{ name: 'idProof' }, { name: 'photo' }]),
//     async (req, res) => {
//         try {
//             const { username, phone, address, email, complaintType, complaintDetails } = req.body;

//             const complaint = new Complaint({
//                 userId: req.session.userId,
//                 username,
//                 phone,
//                 address,
//                 email,
//                 complaintType,
//                 complaintDetails,
//                 idProof: req.files['idProof'][0].path,
//                 photo: req.files['photo'][0].path,
//             });

//             await complaint.save();
//             res.status(201).json({ message: 'Complaint registered successfully.' });
//         } catch (error) {
//             res.status(500).json({ message: 'Failed to register complaint.', error });
//         }
//     }
// );

// // Route to fetch logged-in user complaints
// router.get('/complaints', authenticateUser, async (req, res) => {
//     try {
//         const complaints = await Complaint.find({ userId: req.session.userId });
//         res.status(200).json(complaints);
//     } catch (error) {
//         res.status(500).json({ message: 'Failed to fetch complaints.', error });
//     }
// });

module.exports = router;



