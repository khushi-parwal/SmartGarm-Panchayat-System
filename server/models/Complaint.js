const mongoose = require('mongoose');

const ComplaintSchema = new mongoose.Schema({
  
  username: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  email: { type: String, required: true },
  complaintType: { type: String, required: true },
  complaintDetails: { type: String },
  idProof: { type: String }, // Stores file path for ID proof
  photo: { type: String }, // Stores file path for issue photo
}, { timestamps: true });

module.exports = mongoose.model('Complaint', ComplaintSchema);


// // const mongoose = require('mongoose');

// // Define the schema for complaints
// const ComplaintSchema = new mongoose.Schema(
//   {
//     userId: {
//       type: mongoose.Schema.Types.ObjectId, // Reference to the User model (assuming users are stored in a separate collection)
//       ref: 'User', 
//       required: true, 
//     },
//     username: { type: String, required: true }, // Name of the user filing the complaint
//     phone: { type: String, required: true }, // Phone number of the user
//     address: { type: String, required: true }, // Address of the user
//     email: { type: String, required: true }, // Email of the user
//     complaintType: { type: String, required: true }, // Type/category of the complaint
//     complaintDetails: { type: String }, // Additional details about the complaint
//     idProof: { type: String }, // File path or URL for the user's ID proof
//     photo: { type: String }, // File path or URL for a photo related to the issue
//   },
//   { timestamps: true } // Automatically add createdAt and updatedAt timestamps
// );

// module.exports = mongoose.model('Complaint', ComplaintSchema);
