const express = require('express');
const router = express.Router();
const Ward = require('./../models/Ward');

// POST Route for Creating a New Ward Entry
router.post('/wards', async (req, res) => {
    const { wardNumber, areaName, landMark, families, voters, councilorName, councilorNumber } = req.body;

    try {
        const newWard = new Ward({
            wardNumber,
            areaName,
            landMark,
            families,
            voters,
            councilorName,
            councilorNumber,
        });
        await newWard.save();
        res.status(201).json({ message: 'Ward entry created successfully', ward: newWard });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

router.get('/displayward', async (req, res) => {
    try {
      const wardEntries = await Ward.find();
      res.json(wardEntries);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching ward entries', error });
    }
  });

module.exports = router;
