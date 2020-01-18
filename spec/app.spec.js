const { expect } = require('chai');
const request = require('supertest');
const app = require('../app');
const connection = require('../db/connection');

describe('/api', () => {
  after(() => {
    connection.end();
  });
  describe('/auth', () => {
    it('POST:200, returns a user object if username and password are found', () => {
      return request(app)
        .post('/api/auth')
        .send({ username: 'user1288', password: 'password' })
        .expect(200)
        .then(({ body: { user } }) => {
          expect(user).to.be.an('object');
          expect(user).to.have.keys(['uuid', 'username', 'email']);
        });
    });
    describe('ERRORS /api/auth', () => {
      it("POST:400, when user's username or password are missing", () => {
        return request(app)
          .post('/api/auth')
          .send({ username: 'user1288' })
          .expect(400)
          .then(({ body: { msg } }) => {
            expect(msg).to.equal('Please enter your username and password.');
          });
      });
      it("POST:404, when user's details are not found", () => {
        return request(app)
          .post('/api/auth')
          .send({ username: 'user12', password: 'password' })
          .expect(404)
          .then(({ body: { msg } }) => {
            expect(msg).to.equal('Username or password are not correct.');
          });
      });
    });
    describe.only('/signup', () => {
      it('POST:201, creates and returns a new user a hashed password', () => {
        return request(app)
          .post('/api/auth/signup')
          .send({
            username: 'newuser',
            password: 'password',
            email: 'newuser@email.com',
            uuid: '710b962e-041c-11e1-9234-0123456789az'
          })
          .expect(201)
          .then(({ body: { user } }) => {
            expect(user).to.have.keys(['uuid', 'username', 'email']);
          });
      });
    });
  });
});
