const { Router } = require("express");
const { getCountriesHandler, getCountryByIdHandler } = require("../handlers/countriesHandler");

const countriesRouter = Router();

countriesRouter.get("/", getCountriesHandler);
countriesRouter.get("/:id", getCountryByIdHandler);

module.exports = countriesRouter;
