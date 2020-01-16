const authRouter = require('express').Router();

authRouter.route('/').get();

module.exports = authRouter;
