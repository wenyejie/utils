import { isArray as e } from "./isArray.js";
const t = (r) => e(r) ? Array.from(new Set(r)) : (console.error(`${r} is not a array`), r);
export {
  t as default,
  t as unique
};
