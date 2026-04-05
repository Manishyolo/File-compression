import { spawn } from "child_process";
import ffmpeg from "ffmpeg-static";


//  function to compress media files using ffmpeg
export function Mediacompression({ inputPath, outputPath }) {
  
 return new Promise((resolve, reject) => {
      const ffmpegProcess = spawn(ffmpeg, ["-i", inputPath, outputPath]);

    ffmpegProcess.stderr.on("data", (data) => {
      console.log(data.toString());
    });

    ffmpegProcess.on("close", (code) => {
      if (code === 0) {
        console.log("Compression finished");
        resolve(outputPath);
      } else {
        reject(new Error("FFmpeg failed"));
      }
    });
 })
}


