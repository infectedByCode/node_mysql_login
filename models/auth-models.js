const connection = require('../db/connection');

exports.signinUser = (username, password, cb) => {
  connection.query(
    'SELECT * FROM users WHERE username = ? AND user_password = ?;',
    [username, password],
    (error, results) => {
      if (error) return cb(error);
      return cb(null, results[0]);
    }
  );
};
