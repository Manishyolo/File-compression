const {spawn} = require("child_process");
const ffmpeg = require("ffmpeg-static")



function filecompression(inputPath,outputPath){

const process = spawn(ffmpeg,[
    "-i",
    inputPath,
    outputPath
])

process.stderr.on("data",data=>{
    console.log(data.toString());
    
})
process.on("close",()=>{
    console.log("video finished");
    return true
    
})

}


module.exports = filecompression
