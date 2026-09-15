import {
  ImageCompression,
  VideoCompression,
} from "../services/compression_tools.js";
import { getFileType } from "../utility/fileTypes.js";
import FileUpload from "../services/fileupload.js";
import fileModel from "../models/File.model.js";
import Busboy from "busboy";
import path from "path";
import fs from "fs";

// Controller to handle file compression and upload
export async function FileCompressController(req, res) {
  try {
    let userValues = {};

    const busboy = Busboy({
      headers: req.headers,
    });

    busboy.on("field", (fieldname, value) => {
      if (fieldname === "resolution") {
        userValues.resolution = value;
        console.log(fieldname, value);
      }
    });

    busboy.on("file", async function (fieldname, file, info) {
      const extension = path.extname(info.filename).toLowerCase();

      const fileType = getFileType(extension);

      if (fileType === "image") {
        console.log("image detected");
        const { outputstream, finished } = ImageCompression(file, userValues);

        const uploadedfile = await FileUpload(
          outputstream,
          `compressed_${info.filename}`,
        );

        console.log(uploadedfile);

        const { url, fileType, name, thumbnailUrl } = uploadedfile;

        const fileData = await fileModel.create({
          filename: name,
          fileurl: url,
          fileType: fileType,
          thumbnailurl: thumbnailUrl,
        });

        await finished;

        console.log("this finished variable", finished);

        return res
          .status(200)
          .json({ message: "file uploaded", file: fileData });
      }

      if (fileType === "video") {
        const { outputstream, finished } = VideoCompression(file, userValues);

        const uploadedfile = await FileUpload(
          outputstream,
          `compressed_${info.filename}`,
        );

        console.log(uploadedfile);
        const { url, fileType, name, thumbnailUrl } = uploadedfile;

        const fileData = await fileModel.create({
          filename: name,
          fileurl: url,
          fileType: fileType,
          thumbnailurl: thumbnailUrl,
        });
        await finished;

        console.log(finished);

        return res
          .status(200)
          .json({ message: "file uploaded", file: fileData });
      }
    });

    req.pipe(busboy);
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: error,
    });
  }
}
