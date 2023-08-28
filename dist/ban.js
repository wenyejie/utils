import { isObject as i } from "./isObject.js";
import "./toRawType.js";
import "./toTypeString.js";
import "./objectToString.js";
import "./decapitalize.js";
const n = (r, ...e) => {
  let t = {};
  return i(r) && (t = { ...r }, e.forEach((o) => {
    delete t[o];
  })), t;
};
export {
  n as ban,
  n as default
};
