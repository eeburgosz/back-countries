const { Router } = require("express");
const countriesRouter = require("./countriesRouter");
const activityRouter = require("./activityRouter");

const mainRouter = Router();

mainRouter.use('/countries', countriesRouter);
mainRouter.use('/activity', activityRouter);

module.exports = mainRouter;