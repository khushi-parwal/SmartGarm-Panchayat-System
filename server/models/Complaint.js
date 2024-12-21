const mongoose = require('mongoose');

const ComplaintSchema = new mongoose.Schema({
  
  username: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  email: { type: String, required: true },
  complaintType: { type: String, required: true },
  complaintDetails: { type: String },
  idProof: { type: String },
  photo: { type: String }, 
}, { timestamps: true });

module.exports = mongoose.model('Complaint', ComplaintSchema);


