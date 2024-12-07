// const mongoose = require('mongoose');

// const myComplaintSchema = new mongoose.Schema({
//   username: { type: String, required: true },
 
//   complaintType: { type: String, required: true },
//   complaintDetails: { type: String },
 
// }, { timestamps: true });

// module.exports = mongoose.model('myComplaint', myComplaintSchema);

const mongoose = require("mongoose");

const myComplaintSchema = new mongoose.Schema(
    {
        username: { type: String, required: true }, // Tied to the user's session
        complaintType: { type: String, required: true },
        complaintDetails: { type: String },
        status:{type:String},
    },
    { timestamps: true } // Automatically manage `createdAt` and `updatedAt`
);

module.exports = mongoose.model("myComplaint", myComplaintSchema);
