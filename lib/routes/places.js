const { Router } = require('express');
const ensureAuth = require('../middleware/ensure-auth');
const Place = require('../models/Place');

module.exports = Router()
  .post('/', (req, res, next) => {
    const { placeName, address, startTime, endTime, day } = req.body;
    Place
      .create({ placeName, address, email: req.user.sub, startTime, endTime, day })
      .then(place => res.send(place))
      .catch(next);
  })
    
  .get('/', (req, res, next) => {
    Place
      .find()
      .then(places => res.send(places))
      .catch(next);
  });
