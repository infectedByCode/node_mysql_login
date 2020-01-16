const session = require('express-session');

const { signinUser } = require('../models/auth-models');

exports.loginUser = (req, res, next) => {
  const { username, password } = req.body;
  signinUser(username, password, (error, response) => {
    if (error) res.status(error.status).send({ msg: error.msg });
    else {
      req.session.loggedin = true;
      req.session.username = response.username;
      res.status(200).send({ user: response }); // possibly only send username back
    }
  });
};
