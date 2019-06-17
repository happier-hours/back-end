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
  },
  startTime: {
    type: String,
    require: true
  },
  endTime: {
    type: String,
    require: true
  },
  monday: {
    type: Boolean,
    require: false
  },
  tuesday: {
    type: Boolean,
    require: false
  },
  wednesday: {
    type: Boolean,
    require: false
  },
  thursday: {
    type: Boolean,
    require: false
  },
  friday: {
    type: Boolean,
    require: false
  },
  saturday: {
    type: Boolean,
    require: false
  },
  sunday: {
    type: Boolean,
    require: false
  }
});

module.exports = mongoose.model('Place', placeSchema);
