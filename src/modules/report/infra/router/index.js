const express = require("express");
const reportRouter = express.Router();
const createReport = require("../../use-case/create-report");
const defaultInfo = require("../../use-case/default-info");

reportRouter.get("/info", (req, res) => defaultInfo.execute(req, res));
reportRouter.post("/create", (req, res) => createReport.execute(req, res));

module.exports = reportRouter;
