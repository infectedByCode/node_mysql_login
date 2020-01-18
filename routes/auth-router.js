const authRouter = require('express').Router();
const { loginUser, postUser } = require('../controllers/auth-controller');

authRouter.route('/').post(loginUser);
authRouter.route('/signup').post(postUser);

module.exports = authRouter;
