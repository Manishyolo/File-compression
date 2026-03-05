const filecompression = require('../services/compression');


async function FileCompressController(req,res){
    console.log(req.file);
    const file = req.file;
    const inputPath = req.file.path;
    const outputPath = `src/uploads/compressed/${req.file.filename}`


    try {
         filecompression(inputPath,outputPath)
    } catch (error) {
        console.log(error);
        
    }




    return res.status(200).json({message:"file uploaded",
        file:req.file
    })

}


module.exports = {
    FileCompressController
}