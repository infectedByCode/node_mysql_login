const { expect } = require('chai');
const request = require('supertest');
const app = require('../app');
// const connection = require('../db/connection');

describe('/api', () => {
  describe('/auth', () => {
    it('GET:200, returns a user object if username and password are found', () => {
      return request(app)
        .get('/api/auth')
        .expect(200)
        .then(({ body: { user } }) => {
          expect(user).to.be.an('object');
        });
    });
  });
});
