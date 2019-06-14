require('dotenv').config();
const request = require('supertest');
const mongoose = require('mongoose');
const connect = require('../../lib/utils/connect');
const app = require('../../lib/app');

// const createPlace = place => {
//   return request(app)
//     .post('/api/v1/places')
//     .send(place)
//     .then(res => res.body);
// };

describe('places routes', () => {
  beforeAll(() => {
    return connect();
  });

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  afterAll(() => {
    return mongoose.connection.close();
  });

  it('can create a place via POST', () => {
    return request(app)
      .post('/api/v1/places')
      .send({ placeName: 'Momos', address: '1111122 PDX' })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          placeName: 'Momos',
          address: '1111122 PDX',
          __v: 0
        });
      });
  });
});
