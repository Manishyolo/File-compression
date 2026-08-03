import {Router} from "express";
const FileRouter = Router();

// controllers
import {FileCompressController} from "../controllers/File.controller.js";

// middlewares
import {upload} from "../middleware/FileUpload.middleware.js";




FileRouter.post("/compress",FileCompressController)


export default FileRouter;