const { imagekit, toFile } = require("../config/ImageKit");
const fs = require("fs");

async function FileUpload(filepath, filename) {
  const fileBuffer = fs.readFileSync(filepath);

  const result = await imagekit.files.upload({
    file: await toFile(Buffer.from(fileBuffer), "file"),
    fileName: filename,
    folder: "Compressed_files",
  });

  return result;
}

module.exports = FileUpload;
