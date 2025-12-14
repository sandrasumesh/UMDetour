const mongoose = require('mongoose');

const constructionSchema = new mongoose.Schema({
  location: { type: String, required: true },
  description: { type: String, required: true },
  detour: String,
  latitude: Number,
  longitude: Number
});

module.exports = mongoose.models.Construction || mongoose.model('Construction', constructionSchema);