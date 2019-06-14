const { Router } = require('express');
const Place = require('../models/Place');

module.exports = Router()
  .post('/', (req, res, next) => {
    const { placeName, address } = req.body;
    Place
      .create({ placeName, address })
      .then(place => res.send(place))
      .catch(next);
  })
    
  .get('/', (req, res, next) => {
    Place
      .find()
      .then(places => res.send(places))
      .catch(next);
  });
