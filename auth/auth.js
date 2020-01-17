exports.checkAuth = (req, res, next) => {
  if (req.session.loggedin) next();
  else res.status(401).send({ msg: 'Access denied!' });
};
