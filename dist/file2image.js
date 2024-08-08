import { file2url } from "./file2url.js";
const file2image = (file) => {
  const image = document.createElement("img");
  image.src = file2url(file);
  return image;
};
export {
  file2image
};
