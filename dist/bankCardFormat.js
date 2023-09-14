import { isString as o } from "./isString.js";
import { removeSpace as e } from "./removeSpace.js";
const i = (r) => o(r) ? e(r).replace(/(\d{4}(?=\d))/g, "$1 ") : (console.error(`"${r}" is not a string`), "");
export {
  i as bankCardFormat,
  i as default
};
