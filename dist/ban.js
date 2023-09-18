import { isObject as i } from "./isObject.js";
import "./toRawType.js";
import "./decapitalize.js";
const c = (r, ...e) => {
  if (!i(r)) {
    console.error(`"${r}" is not a object`);
    return;
  }
  let t = {};
  return t = { ...r }, e.forEach((o) => {
    delete t[o];
  }), t;
};
export {
  c as ban,
  c as default
};
