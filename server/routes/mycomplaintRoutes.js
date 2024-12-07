
// const express = require('express');
// const router = express.Router();
// const Usercomplaint = require('../models/Usercomplaint');

// // GET /mycomplaints/:userId
// router.get('/mycomplaints/:userId', async (req, res) => {
//   const { userId } = req.params;

//   try {
//     // Find complaints associated with the userId
//     const complaints = await Usercomplaint.find({ userId });
//     if (!complaints.length) {
//       return res.status(404).json({ message: 'No complaints found.' });
//     }

//     res.status(200).json(complaints);
//   } catch (err) {
//     console.error('Error fetching complaints:', err);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const Usercomplaint = require('../models/Usercomplaint');

// GET /mycomplaints/:userId - Fetch complaints for a specific user

  router.get('/mycomplaints/:userId', async (req, res) => {
  const { userId } = req.params;
  console.log("Received userId:", userId);  // Debugging the userId received

  try {
    // Find complaints associated with the userId
    const complaints = await Usercomplaint.find({ userId });
    console.log("Found complaints:", complaints);  // Log the complaints found
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

