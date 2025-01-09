
// const express = require('express');
// const router = express.Router();
// const Usercomplaint = require('../models/Usercomplaint');

//   router.get('/mycomplaints/:userId', async (req, res) => {
//   const { userId } = req.params;
//   console.log("Received userId:", userId);

//   try {
//     const complaints = await Usercomplaint.findOne({id: req.body.userId });
//     console.log("Found complaints:", complaints);
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





