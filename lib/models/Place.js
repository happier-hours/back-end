const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
  placeName: {
    type: String,
    minlength: 1,
    maxlength: 30,
    require: true
  },
  address: {
    type: String,
    minlength: 6,
    maxlength: 100,
    require: true
  },
  email: {
    type: String,
    require: true
  }
});

module.exports = mongoose.model('Place', placeSchema);
