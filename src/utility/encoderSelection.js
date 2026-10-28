import {
  ImageEncoders,
  VideoEncoders,
  imageEncoderMap,
  videoEncoderMap,
} from "../services/ffmpeg/encoders.js";

export const encoderSelection = (format) => {
  // -----------------------------------------
  // 1. Validate input
  // -----------------------------------------
console.log(format)
  if (!format) {
    throw new Error("Format not provided");
  }

  // Convert to lowercase and remove unnecessary spaces/dots.
  // Examples:
  // " JPG "  -> "jpg"
  // ".PNG"   -> "png"
  // "WebP"   -> "webp"
  const normalizedFormat = String(format).trim().toLowerCase().replace(".", "");


  // -----------------------------------------
  // 4. Check if the selected encoder actually
  //    exists in your encoder arrays
  // -----------------------------------------

  const imageEncoder = imageEncoderMap[normalizedFormat];

  if (imageEncoder) {
    // Prevent returning an encoder that FFmpeg
    // does not exist in your supported list.
    if (!ImageEncoders.includes(imageEncoder)) {
      throw new Error(`Image encoder "${imageEncoder}" is not supported`);
    }

    return {
      format: normalizedFormat,
      type: "image",
      encoder: imageEncoder,
    };
  }

  const videoEncoder = videoEncoderMap[normalizedFormat];

  if (videoEncoder) {
    if (!VideoEncoders.includes(videoEncoder)) {
      throw new Error(`Video encoder "${videoEncoder}" is not supported`);
    }

    return {
      format: normalizedFormat,
      type: "video",
      encoder: videoEncoder,
    };
  }

  // -----------------------------------------
  // 5. Format wasn't found
  // -----------------------------------------

  throw new Error(`File format "${normalizedFormat}" is not supported`);
};
