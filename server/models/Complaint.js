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

// models/Complaint.js
// const mongoose = require('mongoose');

// const complaintSchema = new mongoose.Schema({
//     userId: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User',
//         required: true,
//     },
//     username: { type: String, required: true },
//     phone: { type: String, required: true },
//     address: { type: String, required: true },
//     email: { type: String, required: true },
//     complaintType: { type: String, required: true },
//     complaintDetails: { type: String, required: true },
//     idProof: { type: String, required: true },
//     photo: { type: String, required: true },
//     status: { type: String, default: 'Pending' },
// }, { timestamps: true });

// module.exports = mongoose.model('Complaint', complaintSchema);

