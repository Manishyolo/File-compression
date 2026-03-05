const express = require("express");
const FileRouter = express.Router();


// controllers
const { FileCompressController} = require('../controllers/File.controller');

// middlewares
const upload = require("../middleware/FileUpload.middleware");




FileRouter.post("/compress",upload.single("file"),FileCompressController)


module.exports = FileRouter;