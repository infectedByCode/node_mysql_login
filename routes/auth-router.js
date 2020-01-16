const authRouter = require('express').Router();
const { loginUser } = require('../controllers/auth-controller');

authRouter.route('/').post(loginUser);

module.exports = authRouter;
