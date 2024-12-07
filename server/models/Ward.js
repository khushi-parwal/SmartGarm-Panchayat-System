const mongoose = require('mongoose');

const wardSchema = new mongoose.Schema({
    wardNumber: { type: String, required: true },
    areaName: { type: String, required: true },
    landMark: { type: String },
    families: { type: Number, required: true },
    voters: { type: Number, required: true },
    councilorName: { type: String, required: true },
    councilorNumber: { type: String, required: true },
});

module.exports = mongoose.model('Ward', wardSchema);
