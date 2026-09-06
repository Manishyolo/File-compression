import {
  ImageCompression,
  VideoCompression,
} from "../services/compression_tools.js";
import FileUpload from "../services/fileupload.js";
import fileModel from "../models/File.model.js";
import Busboy from "busboy";
import path from "path";
import fs from "fs";

// Controller to handle file compression and upload
export async function FileCompressController(req, res) {
  try {
    const busboy = Busboy({
      headers: req.headers,
    });

    busboy.on("file", busboyCallback);

    async function busboyCallback(fieldname, file, info) {
      const extension = path.extname(info.filename).toLowerCase();

      if ([".jpg", ".jpeg", ".png", ".webp"].includes(extension)) {
        console.log("image detected");
        const { outputstream, finished } = ImageCompression(file);

        const result = await FileUpload(
          outputstream,
          `compressed_${info.filename}`,
        );

        console.log(result)

        // const writeStream = fs.createWriteStream(
        //   `./compressed${path.extname(info.filename)}`,
        // );

        // outputstream.pipe(writeStream);

        // writeStream.on("finish", () => {
        //   console.log("compressed file created");
        // });
        await finished;

        console.log("this finished variable", finished);
      }
      if ([".mp4", ".mov", ".mkv", ".avi", ".webm"].includes(extension)) {
        const { outputstream, finished } = VideoCompression(file);

        const result = await FileUpload(
          outputstream,
          `compressed_${info.filename}`,
        );
        
         console.log(result)
        // const writeStream = fs.createWriteStream(
        //   `./compressed${path.extname(info.filename)}`,
        // );
        // outputstream.pipe(writeStream);

        // writeStream.on("finish", () => {
        //   console.log("compressed file created");
        // });
        await finished;

        console.log(finished);

        console.log("video detected", outputstream);
      }
    }

    req.pipe(busboy);

    // const uploadedfile = await FileUpload(compressedFile, file.filename);
    // const { url, fileType, name, thumbnailUrl } = uploadedfile;

    // const fileData = await fileModel.create({
    //   filename: name,
    //   fileurl: url,
    //   fileType: fileType,
    //   thumbnailurl: thumbnailUrl,
    // });

    // return res.status(200).json({ message: "file uploaded", file: fileData });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: error,
    });
  }
}
