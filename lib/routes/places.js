const { Router } = require('express');
const ensureAuth = require('../middleware/ensure-auth');
const Place = require('../models/Place');
const { joinUsers } = require('../services/auth');

module.exports = Router()
  .post('/', (req, res, next) => {
    const { placeName, address } = req.body;
    Place
      .create({ placeName, address, email: req.user.sub })
      .then(place => res.send(place))
      .catch(next);
  })
    
  .get('/', (req, res, next) => {
    Place
      .find()
      .then(places => console.log('afterfind', places))
      .then(places => joinUsers(places, 'email'))
      .then(places => console.log('afterjoinusers', places))
      .then(places => res.send(places))
      .then(places => console.log('aftersend', places))
      .catch(next);
  });
