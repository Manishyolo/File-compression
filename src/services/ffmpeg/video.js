import { spawn } from "child_process";
import ffmpeg from "ffmpeg-static";
import { parseResolution } from "../../utility/resolution.js";

export function VideoCompression(file, userValues) {
  const { resolution } = userValues;
  console.log("this is a file info ", file);
  // const { width, height } = parseResolution(resolution);

  const ffmpegProcess = spawn(ffmpeg, [
    // stream input pipeline
    "-i",
    "pipe:0",
    // encoder
    "-c:v",
    "libx264",
    // Bitrate
    "-crf",
    "28",
    // Speed of compression
    "-preset",
    "fast",

    "-c:a",
    "aac",

    "-b:a",
    "128k",

    "-f",
    "mp4",

    "-movflags",
    "frag_keyframe+empty_moov",
     // Stream Output pipeline
    "pipe:1",
  ]);

  let inputSize = 0;
  let outputSize = 0;

  // Count incoming bytes
  file.on("data", (chunk) => {
    inputSize += chunk.length;
  });

  // Count outgoing bytes
  ffmpegProcess.stdout.on("data", (chunk) => {
    outputSize += chunk.length;
  });

  file.pipe(ffmpegProcess.stdin);

  const outputstream = ffmpegProcess.stdout;

  const finished = new Promise((resolve, reject) => {
    ffmpegProcess.stderr.on("data", (data) => {
      console.log(data.toString());
    });

    ffmpegProcess.on("close", (code) => {
      if (code === 0) {
        console.log("Compression finished");

        console.log(`Original: ${(inputSize / 1024 / 1024).toFixed(2)} MB`);

        console.log(`Compressed: ${(outputSize / 1024 / 1024).toFixed(2)} MB`);

        const reduction = ((inputSize - outputSize) / inputSize) * 100;

        console.log(`Size reduced: ${reduction.toFixed(2)}%`);

        resolve({
          inputSize,
          outputSize,
          reduction,
        });
      } else {
        reject(new Error("FFmpeg failed"));
      }
    });
  });

  return {
    outputstream,
    finished,
  };
}
