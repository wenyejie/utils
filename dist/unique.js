import { isArray as e } from "./isArray.js";
const n = (r) => e(r) ? Array.from(new Set(r)) : r;
export {
  n as default,
  n as unique
};
