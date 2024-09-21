const mongoose = require('mongoose');

const therapistSchema = new mongoose.Schema({
  name: String,
  experience: String,
  price: String,
  expertise: [String],
  languages: [String],
  sessionMode: [String],
  location: String,
  availableSlots: [String],
  profileImage: String, // URL or base64 string for the image
});

const Therapist = mongoose.model('Therapist', therapistSchema);

module.exports = Therapist;
