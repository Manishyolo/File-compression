const {spawn} = require("child_process");
const ffmpeg = require("ffmpeg-static")


const process = spawn(ffmpeg,[
    "-i",
    "input.mp4",
    "output.mp4"
])

process.stderr.on("data",data=>{
    console.log(data.toString());
    
})
process.on("close",()=>{
    console.log("video finished");
    
})
