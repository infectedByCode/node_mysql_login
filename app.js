const express = require('express');
const session = require('express-session');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'pineappleGold',
  database: 'mysql_test'
});

connection.connect();

const app = express();

app.get('/', (req, res, next) => {
  res.send('Hello World!');
});

module.exports = app;
