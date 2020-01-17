const connection = require('../db/connection');

exports.signinUser = (username, password, cb) => {
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
