// const mongoose = require('mongoose');

// const UsercomplaintSchema = new mongoose.Schema({
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//   complaintType: { type: String, required: true },
//   complaintDetails: { type: String, required: true },
//   status: { type: String, default: 'Pending' }, // e.g., Pending, Resolved
//   createdAt: { type: Date, default: Date.now },
// });

// module.exports = mongoose.model('Usercomplaint', UsercomplaintSchema);


const mongoose = require('mongoose');

const usercomplaintSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    username: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    email: { type: String, required: true },
    complaintType: { type: String, required: true },
    complaintDetails: { type: String, required: true },
    idProof: { type: String, required: true },
    photo: { type: String, required: true },
    status: { type: String, default: 'Pending' },
}, { timestamps: true });

module.exports = mongoose.model('usercomplaint', usercomplaintSchema);
