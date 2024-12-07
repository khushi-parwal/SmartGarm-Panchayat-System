const mongoose = require('mongoose');

const UsercomplaintSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  complaintType: { type: String, required: true },
  complaintDetails: { type: String, required: true },
  status: { type: String, default: 'Pending' }, // e.g., Pending, Resolved
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Usercomplaint', UsercomplaintSchema);