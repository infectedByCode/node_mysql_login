const express = require('express');
const session = require('express-session');

const apiRouter = require('./routes/api-router');

const app = express();
app.use(express.json());

app.get('/', (req, res, next) => {
  res.send('Hello World!');
});

app.use('/api', apiRouter);

module.exports = app;
