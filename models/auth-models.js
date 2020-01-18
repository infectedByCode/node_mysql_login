const bcrypt = require('bcrypt');
const saltRounds = 10;
const connection = require('../db/connection');

exports.signinUser = (username, password, cb) => {
  // will need bcyrt to check passwords
  if (username && password) {
    connection.query(
      'SELECT username, email, uuid FROM users WHERE username = ? AND user_password = ?;',
      [username, password],
      (error, results) => {
        if (error) return cb(error);
        return results.length > 0
          ? cb(null, results[0])
          : cb({ status: 404, msg: 'Username or password are not correct.' });
      }
    );
  } else {
    return cb({ status: 400, msg: 'Please enter your username and password.' });
  }
};

exports.createdUser = (username, password, uuid, email, cb) => {
  // Add in checks for data

  bcrypt.hash(password, saltRounds, function(error, hash) {
    if (error) return cb(error);

    connection.query(
      'INSERT INTO users (uuid, username, user_password, email) VALUES (?, ?, ?, ?);',
      [uuid, username, hash, email],
      (error, results) => {
        if (error) return cb(error);
        return cb(null, results);
      }
    );
  });
};
