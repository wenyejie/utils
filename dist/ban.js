import { isObject as n } from "./isObject.js";
const a = (e, ...t) => {
  if (!n(e)) {
    console.error(`"${e}" is not a object`);
    return;
  }
  let r = {};
  return r = { ...e }, t.forEach((o) => {
    delete r[o];
  }), r;
};
export {
  a as ban,
  a as default
};
