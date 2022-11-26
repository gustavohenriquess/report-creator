const express = require("express");
const reportRouter = express.Router();
const createReport = require("../../use-case/create-report");

reportRouter.post("/test", (req, res) => res.send("test"));
reportRouter.post("/create", (req, res) => createReport.execute(req, res));

module.exports = reportRouter;
