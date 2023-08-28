import { objectToString as t } from "./objectToString.js";
const r = (o) => t.call(o).toLocaleLowerCase();
export {
  r as default,
  r as toTypeString
};
