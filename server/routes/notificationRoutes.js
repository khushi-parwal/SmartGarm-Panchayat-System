const express = require('express');
const Notification = require('../models/Notification');
const router = express.Router();

// POST /api/notifications - Create a new notification
router.post('/notifications', async (req, res) => {
    try {
        const { subject, message, date, time, wordNoAndAreaDetails } = req.body;
        
        const newNotification = new Notification({
            // notificationType
            subject,
            message,
            date,
            time,
            wordNoAndAreaDetails,
        });

        await newNotification.save();
        res.status(200).json({ message: 'Notification sent successfully!' });
    } catch (error) {
        console.error('Error saving notification:', error);
        res.status(500).json({ message: 'Failed to send notification.' });
    }
});

router.get('/getnotification', async (req, res) => {
    try {
        const notifications = await Notification.find();
        res.status(200).json(notifications);
    } catch (error) {
        console.error('Error fetching notifications:', error);
        res.status(500).json({ message: 'Failed to fetch notifications.' });
    }
});

module.exports = router;
