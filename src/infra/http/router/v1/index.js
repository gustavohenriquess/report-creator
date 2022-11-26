const express = require("express");
const v1Router = express.Router();
const uploadRouter = require("../../../../modules/upload/infra/router");
const reportRouter = require("../../../../modules/report/infra/router");

v1Router.get("/", (req, res) => {
  res.send("v1");
});

v1Router.use("/upload", uploadRouter);
v1Router.use("/report", reportRouter);
module.exports = v1Router;
