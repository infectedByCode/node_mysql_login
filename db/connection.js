const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'pineappleGold',
  database: 'login_users'
});

module.exports = connection;
