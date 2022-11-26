const express = require("express");
const uploadReporter = express.Router();
const uploadUseCase = require("../../use-case/upload");
const upload = uploadUseCase.configMulter();

uploadReporter.post("/images", upload.array("files", 10), (req, res) =>
  uploadUseCase.execute(req, res)
);

module.exports = uploadReporter;
