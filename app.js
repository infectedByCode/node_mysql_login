const express = require('express');
const session = require('express-session');
const cors = require('cors');

const { checkAuth } = require('./auth/auth');
const apiRouter = require('./routes/api-router');

const app = express();
app.use(cors());
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
);
app.use(express.json());

app.get('/', checkAuth, (req, res, next) => {
  res.send('Hello World!');
});

app.use('/api', apiRouter);

module.exports = app;
