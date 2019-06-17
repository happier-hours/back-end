require('dotenv').config();
const request = require('supertest');
const mongoose = require('mongoose');
const connect = require('../../lib/utils/connect');
const app = require('../../lib/app');

jest.mock('../../lib/middleware/ensure-auth.js');
jest.mock('../../lib/services/auth.js');

const createPlace = place => {
  return request(app)
    .post('/api/v1/places')
    .send(place)
    .then(res => res.body);
};

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
          email: 'd.cornelius4444@gmail.com',
          __v: 0
        });
      });
  });

  it('can get a list of all places', async() => {
    const places = await Promise.all([
      createPlace({ placeName: 'momos', address: '123456', email: 'd.cornelius4444@gmail.com' })
    ]);

    return request(app)
      .get('/api/v1/places')
      .then(res => {
        expect(res.body).toEqual(places);
      });
  });
});
