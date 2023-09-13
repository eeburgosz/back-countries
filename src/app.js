const express = require('express');
const morgan = require("morgan");
const mainRouter = require("./routes");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(mainRouter);

module.exports = app;