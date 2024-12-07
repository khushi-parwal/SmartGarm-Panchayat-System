const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
  username: String,
  phone: String,
  address: String,
  email: String,
  connectionType: String,
  installationDate: Date,
  idProof: String, // Path for the uploaded file
  documentation: String, // Path for additional documentation if needed
});

module.exports = mongoose.model('Application', ApplicationSchema);
