import { isString as e } from "./isString.js";
const o = /\s+/g, a = (r) => e(r) ? r.replace(o, "") : (console.error(`"${r}" is not a string`), "");
export {
  a as default,
  a as removeSpace
};
