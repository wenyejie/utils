import { file2url as r } from "./file2url.js";
const i = (t) => {
  const e = document.createElement("img");
  return e.src = r(t), e;
};
export {
  i as default,
  i as file2image
};
