const express = require('express');
const morgan = require("morgan");
const mainRouter = require("./routes");
const pg = require('pg');
// const { SELECT } = require("sequelize/types/query-types");
require('dotenv').config();

const { DATABASE_URL } = process.env;
const app = express();

const pool = new pg.Pool({
   connectionString: `${DATABASE_URL}`,
   ssl: true,
});


app.use(morgan("dev"));
app.use(express.json());
app.get('/', async (req, res) => {
   const result = await pool.query('SELECT NOW()');
   return res.json(result.rows[0]);
});
app.use(mainRouter);

module.exports = app;