const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    // notificationType: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    wordNoAndAreaDetails: { type: String, },
});

module.exports = mongoose.model('Notification', notificationSchema);
