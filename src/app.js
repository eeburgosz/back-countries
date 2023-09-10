const express = require('express');
const morgan = require("morgan");
const mainRouter = require("./routes");
const pg = require('pg');
require('dotenv').config();

const { DATABASE_URL } = process.env;
const app = express();

/* const pool =  */new pg.Pool({
   connectionString: `${DATABASE_URL}`
});

app.use(morgan("dev"));
app.use(express.json());
app.use(mainRouter);

module.exports = app;