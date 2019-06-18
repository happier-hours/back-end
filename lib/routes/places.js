const { Router } = require('express');
const ensureAuth = require('../middleware/ensure-auth');
const Place = require('../models/Place');

module.exports = Router()
  .post('/', ensureAuth(), (req, res, next) => {
    const { placeName, address, startTime, endTime, monday, tuesday, wednesday, thursday, friday, saturday, sunday, sports, queer, fancy, ac, patio, groups, dive, dog, games, dates, wheelchair, noisy, vegan, vegetarian } = req.body;

    Place
      .create({ placeName, address, email: req.user.sub, startTime, endTime, monday, tuesday, wednesday, thursday, friday, saturday, sunday, sports, queer, fancy, ac, patio, groups, dive, dog, games, dates, wheelchair, noisy, vegan, vegetarian })
      .then(place => res.send(place))
      .catch(next);
  })

  .get('/', (req, res, next) => {
    Place
      .find()
      .then(places => res.send(places))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    Place
      .findById(req.params.id)
      .then(place => res.send(place))
      .catch(next);
  });
