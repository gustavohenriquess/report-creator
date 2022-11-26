const express = require("express");
const reportRouter = express.Router();
const uploadUseCase = require("../../use-case/upload");
const upload = uploadUseCase.configMulter();

reportRouter.post("/images", upload.array("files", 10), (req, res) =>
  uploadUseCase.execute(req, res)
);

module.exports = reportRouter;
