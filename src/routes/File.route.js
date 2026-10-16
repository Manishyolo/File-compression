import {Router} from "express";
const FileRouter = Router();

// controllers
import {FileCompressController,CustomFileCompressController} from "../controllers/File.controller.js";

// middlewares
import {upload} from "../middleware/FileUpload.middleware.js";




FileRouter.post("/compress",FileCompressController)
FileRouter.post("/compress/custom",CustomFileCompressController)


FileRouter.get("/check",(req,res)=>{
    res.status(200).json({
        status:"all good"
    })
})
export default FileRouter;