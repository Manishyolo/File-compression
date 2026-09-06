import fs from "fs";
import {imageKit} from "../config/ImageKit.js";
import { toFile } from "@imagekit/nodejs";

async function FileUpload(outputstream, filename) {

console.log(outputstream,filename);
  const result = await imageKit.files.upload({
    file: await toFile(outputstream,filename),
    fileName: filename,
    folder: "Compressed_files",
  });

  return result;
}

export default FileUpload;
