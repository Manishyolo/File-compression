export let ImageEncoders = [
  "png",       // PNG image encoder — lossless compression, supports transparency
  "mjpeg",     // JPEG image encoder — lossy compression, good for normal photographs
  "ljpeg",     // Lossless JPEG encoder — preserves image data without quality loss
  "libwebp",   // WebP encoder — lossy or lossless, usually smaller than JPEG/PNG

  "jpeg2000",  // JPEG 2000 encoder — lossy or lossless, advanced image compression
  "jpegls",    // JPEG-LS encoder — lossless / near-lossless image compression
  "jpegxl",    // JPEG XL encoder — modern lossy/lossless image format
  "jpegxs",    // JPEG XS encoder — very high quality, low-latency image/video compression

  "gif",       // GIF encoder — limited to 256 colors, supports simple animation
  "bmp",       // BMP encoder — mostly uncompressed, very large file sizes

  "tiff",      // TIFF encoder — high-quality image container, supports various compression types
  "pam",       // PAM encoder — lossless portable arbitrary-map image format
  "pbm",       // PBM encoder — monochrome (black/white) images
  "pgm",       // PGM encoder — grayscale images
  "ppm",       // PPM encoder — RGB color images, generally uncompressed
  "pfm",       // PFM encoder — floating-point RGB/grayscale images

  "qoi",       // QOI encoder — fast lossless image compression
  "sgi",       // SGI/RGB encoder — lossless-style high-quality image storage
  "sunrast",   // Sun Raster encoder — legacy raster image format
  "targa",     // TGA/Targa encoder — raster images, commonly used for graphics
  "xbm",       // XBM encoder — simple monochrome bitmap format
  "xface",     // X-Face encoder — tiny monochrome images, mainly historical/email use
];
export let VideoEncoders = [
  "libx264",        // H.264/AVC encoder — excellent compatibility, good compression
  "libx265",        // H.265/HEVC encoder — better compression than H.264, but slower
  "libvpx-vp9",     // VP9 encoder — open-source codec, commonly used for WebM

  "libaom-av1",     // AV1 encoder — very efficient compression, but slow
  "libsvtav1",      // AV1 encoder — fast AV1 encoding, good for large-scale compression
  "librav1e",       // AV1 encoder — alternative AV1 implementation

  "libvpx",         // VP8 encoder — older WebM video codec
  "mpeg4",          // MPEG-4 Part 2 encoder — older video compression format
  "msmpeg4",        // Microsoft MPEG-4 encoder — legacy codec
  "msmpeg4v2",      // Microsoft MPEG-4 v2 — legacy codec
  "msmpeg4v3",      // Microsoft MPEG-4 v3 — legacy codec

  "mpeg2video",     // MPEG-2 encoder — used by DVDs and older broadcast/video systems
  "mpeg1video",     // MPEG-1 encoder — very old video codec
  "h263",            // H.263 encoder — designed for older low-bandwidth video
  "h263p",           // H.263+ encoder — improved version of H.263

  "ffv1",            // FFmpeg FFV1 — lossless video compression
  "ffvhuff",         // FFmpeg HuffYUV — lossless video compression
  "huffyuv",         // HuffYUV — lossless video codec

  "prores",          // Apple ProRes — high-quality editing/intermediate codec
  "dnxhd",           // Avid DNxHD — professional editing/intermediate codec
  "dnxhr",           // Avid DNxHR — high-resolution version of DNxHD

  "theora",          // Theora encoder — open-source video codec
  "utvideo",         // Ut Video — lossless video codec
];