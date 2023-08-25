'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const file2base64 = require('./file2base64.cjs');
const load = require('./load.cjs');
require('./isFunction.cjs');
require('./toRawType.cjs');
require('./toTypeString.cjs');
require('./objectToString.cjs');
require('./decapitalize.cjs');
require('./isObject.cjs');
require('./hasOwn.cjs');
require('./hasOwnProperty.cjs');
require('./isUndefined.cjs');
require('./isNull.cjs');

const createImg = (url) => {
  return load.load("img", url);
};
const file2img = async (file) => {
  const base64 = await file2base64.file2base64(file);
  return await createImg(base64);
};
const DEFAULT_OPTIONS = {
  noCompressIfLarger: true,
  maxWidth: 1024,
  maxHeight: 1024,
  fillStyle: "rgba(255, 255, 255, 0)",
  quality: 0.75
};
const createCanvas = (options) => {
  return new Promise((resolve) => {
    const $canvas = document.createElement("canvas");
    const context = $canvas.getContext("2d");
    context.fillStyle = options.fillStyle;
    context.fillRect(0, 0, $canvas.width, $canvas.height);
    resolve({ context, $canvas });
  });
};
const calcDrawSize = ($img, options) => {
  const proportion = $img.naturalWidth / $img.naturalHeight;
  let dw;
  let dh;
  let dx = 0;
  let dy = 0;
  let sx = 0;
  let sy = 0;
  let sw = $img.naturalWidth;
  let sh = $img.naturalHeight;
  if (proportion >= 1) {
    if (options.maxWidth > 0) {
      dw = $img.naturalWidth > options.maxWidth ? options.maxWidth : $img.naturalWidth;
    } else {
      dw = $img.naturalWidth;
    }
    dh = dw / proportion;
  } else {
    if (options.maxHeight > 0) {
      dh = $img.naturalHeight > options.maxHeight ? options.maxHeight : $img.naturalHeight;
    } else {
      dh = $img.naturalHeight;
    }
    dw = dh * proportion;
  }
  return { dw, dh, dx, dy, sx, sy, sw, sh };
};
const canvas2file = ($canvas, file, options) => {
  return new Promise((resolve) => {
    $canvas.toBlob(
      (blob) => {
        resolve(new File([blob], file.name, { type: file.type }));
      },
      file.type,
      options.quality
    );
  });
};
const imgCompress = async (file, options) => {
  options = Object.assign(
    { ...DEFAULT_OPTIONS },
    options
  );
  const $img = await file2img(file);
  const { context, $canvas } = await createCanvas(options);
  if (!$canvas.toBlob) {
    return file;
  }
  const { dw, dh, dx, dy, sx, sy, sw, sh } = calcDrawSize($img, options);
  $canvas.width = dw;
  $canvas.height = dh;
  context.drawImage($img, sx, sy, sw, sh, dx, dy, dw, dh);
  const compressFile = await canvas2file($canvas, file, options);
  if (options.noCompressIfLarger && file.size <= compressFile.size || compressFile.size < 1024) {
    return file;
  }
  return compressFile;
};

exports.calcDrawSize = calcDrawSize;
exports.canvas2file = canvas2file;
exports.createCanvas = createCanvas;
exports.default = imgCompress;
exports.file2img = file2img;
