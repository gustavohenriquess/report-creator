require("dotenv-flow").config();
const cors = require("cors");
const express = require("express");
const router = require("./router");

const app = express();

app.use(
  cors({
    exposedHeaders: ["x-total-count", "Content-Type", "Content-Length"],
  })
);

app.use(
  express.json({
    type: ["application/json", "text/plain"],
  })
);

app.use(router);

module.exports = app;
