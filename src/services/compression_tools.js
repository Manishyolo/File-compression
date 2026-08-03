import { spawn } from "child_process";
import ffmpeg from "ffmpeg-static";



//  function to compress media files using ffmpeg
export function Mediacompression(file) {
  
 return new Promise((resolve, reject) => {
      const ffmpegProcess = spawn(ffmpeg, ["-i", "pipe:0","-f","image2", "pipe:1"]);

      file.pipe(ffmpegProcess.stdin)

    ffmpegProcess.stderr.on("data", (data) => {
      console.log(data.toString());
    });

    ffmpegProcess.on("close", (code) => {
      if (code === 0) {
        console.log("Compression finished");
        resolve(ffmpegProcess.stdout);
      } else {
        reject(new Error("FFmpeg failed"));
      }
    });
 })
}


