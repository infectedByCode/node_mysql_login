const apiRouter = require('express').Router();
const authRouter = require('./auth-router');

apiRouter.use('/auth', authRouter);

module.exports = apiRouter;
