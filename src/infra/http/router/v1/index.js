const express = require("express");
const v1Router = express.Router();
const reportRouter = require("../../../../modules/upload/infra/router");

v1Router.get("/", (req, res) => {
  res.send("v1");
});

v1Router.use("/upload", reportRouter);
module.exports = v1Router;
