import { isObject as i } from "./isObject.js";
const l = (r, o) => {
  if (!Array.isArray(r) && !i(r)) {
    console.error(`"${r}" is not array or object`);
    return;
  }
  if (Array.isArray(r))
    for (let e = 0; e < r.length && o(r[e], e, r) !== !1; e++)
      ;
  else
    for (const [e, s] of Object.entries(r))
      if (o(s, e, r) === !1)
        break;
};
export {
  l as default,
  l as each
};
