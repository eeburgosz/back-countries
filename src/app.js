const express = require('express');
const morgan = require("morgan");
const mainRouter = require("./routes");
const pg = require('pg');
require('dotenv').config();

const { DATABASE_URL } = process.env;
const app = express();

/* const pool =  */new pg.Pool({
   connectionString: `${DATABASE_URL}`,
   ssl: true,
});


app.use(morgan("dev"));
app.use(express.json());
// app.get('/hola', async (req, res) => {
//    try {
//       const result = await pool.query('SELECT NOW()');
//       res.json(result.rows[0]);
//    } catch (error) {
//       res.status(404).json({ error: error.message });
//    }
// });
app.use(mainRouter);

module.exports = app;