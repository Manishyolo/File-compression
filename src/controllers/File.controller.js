import { Mediacompression} from "../services/compression_tools.js";
import FileUpload from "../services/fileupload.js";
import fileModel from "../models/File.model.js";

// Controller to handle file compression and upload
export async function FileCompressController(req, res) {
  console.log(req.file);
  const file = req.file;

  const inputPath = req.file.path;
  const outputPath = `src/uploads/compressed/${req.file.filename}`;

  try {
    const compressedFile = await Mediacompression({ inputPath, outputPath });
    const uploadedfile = await FileUpload(compressedFile, file.filename);
    const { url, fileType, name, thumbnailUrl } = uploadedfile;

    const fileData = await fileModel.create({
      filename: name,
      fileurl: url,
      fileType: fileType,
      thumbnailurl: thumbnailUrl,
    });

    

    return res.status(200).json({ message: "file uploaded", file: fileData });
  } catch (error) {
    console.log(error);
  }
}
