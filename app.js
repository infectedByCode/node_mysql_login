const express = require('express');
const session = require('express-session');
const cors = require('cors');
require('dotenv').config();

const { checkAuth } = require('./auth/auth');
const apiRouter = require('./routes/api-router');

const app = express();

const sessionConfig = {
  secret: process.env.COOKIESECRET,
  resave: true,
  saveUninitialized: true,
  cookie: {
    domain: process.env.COOKIESECRET,
    maxAge: 3600000,
    secure: process.env === 'production'
  }
};

app.use(cors());
app.use(session(sessionConfig));
app.use(express.json());

app.get('/', checkAuth, (req, res, next) => {
  res.send('Hello World!');
});

app.use('/api', apiRouter);

module.exports = app;
