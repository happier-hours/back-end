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
  },
  sports: {
    type: Boolean,
    require: false
  },
  queer: {
    type: Boolean,
    require: false
  },
  fancy: {
    type: Boolean,
    require: false
  },
  ac: {
    type: Boolean,
    require: false
  },
  patio: {
    type: Boolean,
    require: false
  },
  groups: {
    type: Boolean,
    require: false
  },
  dive: {
    type: Boolean,
    require: false
  },
  dog: {
    type: Boolean,
    require: false
  },
  games: {
    type: Boolean,
    require: false
  },
  dates: {
    type: Boolean,
    require: false
  },
  wheelchair: {
    type: Boolean,
    require: false
  },
  noisy: {
    type: Boolean,
    require: false
  },
  vegan: {
    type: Boolean,
    require: false
  },
  vegetarian: {
    type: Boolean,
    require: false
  },
  gluten: {
    type: Boolean,
    require: false
  },
  parking: {
    type: Boolean,
    require: false
  },
  reservations: {
    type: Boolean,
    require: false
  }
});

module.exports = mongoose.model('Place', placeSchema);
