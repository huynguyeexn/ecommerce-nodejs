const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const compression = require("compression");

const app = express();

// Init Middlewares
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());

// Init Database
require("./databases/init.mongodb");

// Init Routes
app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Hello wolrd!",
  });
});

// Handling Errors

module.exports = app;
