export const presets = {
  ImagePrebuildPresets: {
    Low: {
      argus: [
        // Stream input
        "-i",
        "pipe:0",

        // Encoder
        "-c:v",
        "libx264",

        // Quality Control with libx264 the range is 0-51 lower value = high quality higher value = lower quality
        "-crf",
        "18",

        // Encoding Speed
        "-preset",
        "slow",

        // Audio Encoder
        "-c:a",
        "aac",

        // Audio Bitrate controller
        "-b:a",
        "128k",

        "-f",
        "mp4",

        "-movflags",
        "frag_keyframe+empty_moov",

        // Stream output
        "pipe:1",
      ],
    },
    Medium: {
      argus: [
        // Stream input
        "-i",
        "pipe:0",

        // Encoder
        "-c:v",
        "libx264",

        // Quality Control with libx264 the range is 0-51 lower value = high quality higher value = lower quality
        "-crf",
        "23",

        // Encoding Speed
        "-preset",
        "medium",

        // Audio Encoder
        "-c:a",
        "aac",

        // Audio Bitrate controller
        "-b:a",
        "128k",

        "-f",
        "mp4",

        "-movflags",
        "frag_keyframe+empty_moov",

        // Stream output
        "pipe:1",
      ],
    },
    High: {
      argus: [
        // Stream input
        "-i",
        "pipe:0",

        // Encoder
        "-c:v",
        "libx264",

        // Quality Control with libx264 the range is 0-51 lower value = high quality higher value = lower quality
        "-crf",
        "28",

        // Encoding Speed
        "-preset",
        "fast",

        // Audio Encoder
        "-c:a",
        "aac",

        // Audio Bitrate controller
        "-b:a",
        "128k",

        "-f",
        "mp4",

        "-movflags",
        "frag_keyframe+empty_moov",

        // Stream output
        "pipe:1",
      ],
    },
    VeryHigh: {
      argus: [
        // Stream input
        "-i",
        "pipe:0",

        // Encoder
        "-c:v",
        "libx264",

        // Quality Control with libx264 the range is 0-51 lower value = high quality higher value = lower quality
        "-crf",
        "32",

        // Encoding Speed
        "-preset",
        "faster",

        // Audio Encoder
        "-c:a",
        "aac",

        // Audio Bitrate controller
        "-b:a",
        "128k",

        "-f",
        "mp4",

        "-movflags",
        "frag_keyframe+empty_moov",

        // Stream output
        "pipe:1",
      ],
    },
    Ultra: {
      argus: [
        // Stream input
        "-i",
        "pipe:0",

        // Encoder
        "-c:v",
        "libx264",

        // Quality Control with libx264 the range is 0-51 lower value = high quality higher value = lower quality
        "-crf",
        "36",

        // Encoding Speed
        "-preset",
        "faster",

        // Audio Encoder
        "-c:a",
        "aac",

        // Audio Bitrate controller
        "-b:a",
        "128k",

        "-f",
        "mp4",

        "-movflags",
        "frag_keyframe+empty_moov",

        // Stream output
        "pipe:1",
      ],
    },
    Psycho: {
      argus: [
        // Stream input
        "-i",
        "pipe:0",

        // Encoder
        "-c:v",
        "libx264",

        // Quality Control with libx264 the range is 0-51 lower value = high quality higher value = lower quality
        "-crf",
        "38",

        // Encoding Speed
        "-preset",
        "ultrafast",

        // Audio Encoder
        "-c:a",
        "aac",

        // Audio Bitrate controller
        "-b:a",
        "128k",

        "-f",
        "mp4",

        "-movflags",
        "frag_keyframe+empty_moov",

        // Stream output
        "pipe:1",
      ],
    },
  },
  VideoPrebuildPresets: {
    Low: {
      argus: [
        // Stream input
        "-i",
        "pipe:0",

        // Encoder
        "-c:v",
        "libx264",

        // Quality Control with libx264 the range is 0-51 lower value = high quality higher value = lower quality
        "-crf",
        "18",

        // Encoding Speed
        "-preset",
        "slow",

        // Audio Encoder
        "-c:a",
        "aac",

        // Audio Bitrate controller
        "-b:a",
        "128k",

        "-f",
        "mp4",

        "-movflags",
        "frag_keyframe+empty_moov",

        // Stream output
        "pipe:1",
      ],
    },
    Medium: {
      argus: [
        // Stream input
        "-i",
        "pipe:0",

        // Encoder
        "-c:v",
        "libx264",

        // Quality Control with libx264 the range is 0-51 lower value = high quality higher value = lower quality
        "-crf",
        "23",

        // Encoding Speed
        "-preset",
        "medium",

        // Audio Encoder
        "-c:a",
        "aac",

        // Audio Bitrate controller
        "-b:a",
        "128k",

        "-f",
        "mp4",

        "-movflags",
        "frag_keyframe+empty_moov",

        // Stream output
        "pipe:1",
      ],
    },
    High: {
      argus: [
        // Stream input
        "-i",
        "pipe:0",

        // Encoder
        "-c:v",
        "libx264",

        // Quality Control with libx264 the range is 0-51 lower value = high quality higher value = lower quality
        "-crf",
        "28",

        // Encoding Speed
        "-preset",
        "fast",

        // Audio Encoder
        "-c:a",
        "aac",

        // Audio Bitrate controller
        "-b:a",
        "128k",

        "-f",
        "mp4",

        "-movflags",
        "frag_keyframe+empty_moov",

        // Stream output
        "pipe:1",
      ],
    },
    VeryHigh: {
      argus: [
        // Stream input
        "-i",
        "pipe:0",

        // Encoder
        "-c:v",
        "libx264",

        // Quality Control with libx264 the range is 0-51 lower value = high quality higher value = lower quality
        "-crf",
        "32",

        // Encoding Speed
        "-preset",
        "faster",

        // Audio Encoder
        "-c:a",
        "aac",

        // Audio Bitrate controller
        "-b:a",
        "128k",

        "-f",
        "mp4",

        "-movflags",
        "frag_keyframe+empty_moov",

        // Stream output
        "pipe:1",
      ],
    },
    Ultra: {
      argus: [
        // Stream input
        "-i",
        "pipe:0",

        // Encoder
        "-c:v",
        "libx264",

        // Quality Control with libx264 the range is 0-51 lower value = high quality higher value = lower quality
        "-crf",
        "36",

        // Encoding Speed
        "-preset",
        "faster",

        // Audio Encoder
        "-c:a",
        "aac",

        // Audio Bitrate controller
        "-b:a",
        "128k",

        "-f",
        "mp4",

        "-movflags",
        "frag_keyframe+empty_moov",

        // Stream output
        "pipe:1",
      ],
    },
    Psycho: {
      argus: [
        // Stream input
        "-i",
        "pipe:0",

        // Encoder
        "-c:v",
        "libx264",

        // Quality Control with libx264 the range is 0-51 lower value = high quality higher value = lower quality
        "-crf",
        "38",

        // Encoding Speed
        "-preset",
        "ultrafast",

        // Audio Encoder
        "-c:a",
        "aac",

        // Audio Bitrate controller
        "-b:a",
        "128k",

        "-f",
        "mp4",

        "-movflags",
        "frag_keyframe+empty_moov",

        // Stream output
        "pipe:1",
      ],
    },
  },
  CustomPresets: {
    argus: [
      // Stream input
      "-i",
      "pipe:0",

      // Encoder
      "-c:v",
      "libx264",

      // Quality Control with libx264 the range is 0-51 lower value = high quality higher value = lower quality
      "-crf",
      "23",

      // Encoding Speed
      "-preset",
      "medium",

      // Audio Encoder
      "-c:a",
      "aac",

      // Audio Bitrate controller
      "-b:a",
      "128k",

      // Stream output
      "pipe:1",
    ],
  },
};
