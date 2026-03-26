import filecompression from "../services/compression.js";
import FileUpload from "../services/fileupload.js";

// Controller to handle file compression and upload
export async function FileCompressController(req,res){
    console.log(req.file);
    const file = req.file;
    const inputPath = req.file.path;
    const outputPath = `src/uploads/compressed/${req.file.filename}`


    try {
     const compressedFile =  await  filecompression({inputPath,outputPath})
      const uploadedfile =  await  FileUpload(compressedFile,file.filename)

      console.log(uploadedfile);
    } catch (error) {  
        console.log(error);
        
    }




    return res.status(200).json({message:"file uploaded",
        file:req.file
    })

}


