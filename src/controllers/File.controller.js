import { getFileType } from "../utility/fileTypes.js";
import FileUpload from "../storage/fileupload.js";
import fileModel from "../models/File.model.js";
import { ImageCompression } from "../services/ffmpeg/image.js";
import { VideoCompression } from "../services/ffmpeg/video.js";
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
      if (fieldname === "CompressionLevel") {
        userValues.CompressionLevel = value;
        console.log(fieldname, value);
      }
    });

    busboy.on("file", async function (fieldname, file, info) {
      const extension = path.extname(info.filename).toLowerCase();

      const fileType = getFileType(extension);

      if (fileType === "image") {
        console.log("image detected");
        console.log(info)
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
 console.log("this is video info",info)
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
