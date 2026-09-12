import { spawn } from "child_process";
import ffmpeg from "ffmpeg-static";

//  function to compress media files using ffmpeg
export function ImageCompression(file) {
  const ffmpegProcess = spawn(ffmpeg, [
    "-i",
    "pipe:0",
    "-f",
    "image2",
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

        console.log(
          `Original: ${(inputSize / 1024 / 1024).toFixed(2)} MB`
        );

        console.log(
          `Compressed: ${(outputSize / 1024 / 1024).toFixed(2)} MB`
        );

        const reduction =
          ((inputSize - outputSize) / inputSize) * 100;

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

export function VideoCompression(file) {
  const ffmpegProcess = spawn(ffmpeg, [
    "-i",
    "pipe:0",

    "-c:v",
    "libx264",

    "-crf",
    "28",

    "-preset",
    "fast",

    "-c:a",
    "aac",

    "-b:a",
    "128k",
    
     "-vf",
  "scale=1280:720",

    "-f",
    "mp4",

    "-movflags",
    "frag_keyframe+empty_moov",

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

        console.log(
          `Original: ${(inputSize / 1024 / 1024).toFixed(2)} MB`
        );

        console.log(
          `Compressed: ${(outputSize / 1024 / 1024).toFixed(2)} MB`
        );

        const reduction =
          ((inputSize - outputSize) / inputSize) * 100;

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
