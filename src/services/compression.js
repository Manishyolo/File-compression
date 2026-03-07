const { spawn } = require("child_process");
const ffmpeg = require("ffmpeg-static");

function filecompression({ inputPath, outputPath }) {
  
 return new Promise((resolve, reject) => {
      const process = spawn(ffmpeg, ["-i", inputPath, outputPath]);

    process.stderr.on("data", (data) => {
      console.log(data.toString());
    });
    process.on("close", (code) => {
      if (code === 0) {
        console.log("Compression finished");
        resolve(outputPath);
      } else {
        reject(new Error("FFmpeg failed"));
      }
    });
 })
}

module.exports = filecompression;
