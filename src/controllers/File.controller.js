import {
  ImageCompression,
  VideoCompression,
} from "../services/compression_tools.js";
import FileUpload from "../services/fileupload.js";
import fileModel from "../models/File.model.js";
import Busboy from "busboy";

// Controller to handle file compression and upload
export async function FileCompressController(req, res) {
  try {
    const busboy = Busboy({
      headers: req.headers,
    });

    busboy.on("file", (fieldname, file, info) => {
      if (info.mimeType.split("/")[0] === "image") {
        const { outputstream, finished } = ImageCompression(file);
        console.log("image detected",outputstream);
      }
      if (info.mimeType.split("/")[0] === "video") {
        const { outputstream, finished } = VideoCompression(file);
        console.log("video detected",outputstream);
      }
    });

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
