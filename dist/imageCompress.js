import { file2image } from "./file2image.js";
const DEFAULT_OPTIONS = {
  quality: 0.95,
  qualityRate: 0.05
};
const calcDrawSize = (image, maxWidth, maxHeight) => {
  const { naturalWidth, naturalHeight } = image;
  const ratio = naturalWidth / naturalHeight;
  let dw;
  let dh;
  if (ratio >= 1) {
    if (maxWidth > 0) {
      dw = Math.min(naturalWidth, maxWidth);
    } else {
      dw = naturalWidth;
    }
    dh = dw / ratio;
  } else {
    if (maxHeight > 0) {
      dh = Math.min(naturalHeight, maxHeight);
    } else {
      dh = naturalHeight;
    }
    dw = dh * ratio;
  }
  return {
    dw: Math.floor(dw),
    dh: Math.floor(dh),
    sw: naturalWidth,
    sh: naturalHeight
  };
};
const image2canvas = (image, maxWidth, maxHeight, fileStyle) => {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  const { dw, dh, sw, sh } = calcDrawSize(image, maxWidth, maxHeight);
  canvas.width = dw;
  canvas.height = dh;
  if (fileStyle) {
    context.fillStyle = fileStyle;
    context.fillRect(0, 0, dw, dh);
  }
  context.drawImage(image, 0, 0, sw, sh, 0, 0, dw, dh);
  return canvas;
};
const canvas2blob = async (canvas, quality) => {
  return new Promise((resolve) => {
    canvas.toBlob(
      (blob) => {
        resolve(blob);
      },
      "image/webp",
      quality
    );
  });
};
const imageCompress = (file, options) => {
  options = Object.assign({ ...DEFAULT_OPTIONS }, options);
  const image = file2image(file);
  return new Promise((resolve, reject) => {
    image.onload = async () => {
      const canvas = image2canvas(image, options.maxWidth, options.maxHeight, options.fileStyle);
      const type = options.filetype ?? file.type;
      const name = options.filename ?? file.name;
      let blob;
      let quality = options.quality;
      do {
        blob = await canvas2blob(canvas, quality);
        quality -= options.qualityRate;
      } while ((blob == null ? void 0 : blob.size) > (options == null ? void 0 : options.maxSize));
      if ((blob == null ? void 0 : blob.size) > (file == null ? void 0 : file.size)) {
        return resolve(file);
      }
      resolve(new File([blob], name, { type }));
    };
    image.onerror = reject;
  });
};
export {
  imageCompress
};
