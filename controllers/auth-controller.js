const { signinUser, createdUser } = require('../models/auth-models');

exports.loginUser = (req, res, next) => {
  const { username, password } = req.body;

  signinUser(username, password, (error, response) => {
    if (error) res.status(error.status).send({ msg: error.msg });
    else {
      req.session.loggedin = true;
      req.session.username = response.username;
      res.status(200).send({ user: response });
    }
  });
};

exports.postUser = (req, res, next) => {
  const { username, password, uuid, email } = req.body;

  createdUser(username, password, uuid, email, (error, response) => {
    if (error) res.status(error.status).send({ msg: error.msg });
    else {
      if (response.affectedRows === 1) {
        req.session.loggedin = true;
        req.session.username = response.username;
        res.status(201).send({ user: { uuid, username, email } });
      }
    }
  });
};
