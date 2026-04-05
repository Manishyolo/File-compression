import fs from "fs";
import {imageKit} from "../config/ImageKit.js";
import { toFile } from "@imagekit/nodejs";

async function FileUpload(filepath, filename) {
  const fileBuffer = fs.readFileSync(filepath);
console.log(fileBuffer,filename);
  const result = await imageKit.files.upload({
    file: await toFile(Buffer.from(fileBuffer), "file"),
    fileName: filename,
    folder: "Compressed_files",
  });

  return result;
}

export default FileUpload;
