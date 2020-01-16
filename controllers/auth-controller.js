const { signinUser } = require('../models/auth-models');

exports.loginUser = (req, res, next) => {
  const { username, password } = req.body;
  signinUser(username, password, (error, response) => {
    if (error) res.status(400).send({ msg: error });
    else res.status(200).send({ user: response });
  });
};
