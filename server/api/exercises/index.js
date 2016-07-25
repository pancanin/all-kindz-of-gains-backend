'use strict';

let authRouter = require('express').Router(),
    controller = require('./controller');

authRouter.get('/muscles', controller.getMuscles);
authRouter.post('/addExercise', controller.addExercise);

module.exports = authRouter;