const { Router } = require("express");
const { createActivityHandler } = require("../handlers/activityHandler");

const activityRouter = Router();

activityRouter.post('/', createActivityHandler);

module.exports = activityRouter;