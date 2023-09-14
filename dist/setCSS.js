import { camelize as l } from "./camelize.js";
const c = (t, e, i) => {
  let s = {};
  if (typeof e == "string") {
    if (i === void 0 && e.includes(":")) {
      t.style.cssText = e;
      return;
    }
    s[e] = i;
  } else
    s = e;
  for (const f in s)
    t.style[l(f)] = s[f];
};
export {
  c as default,
  c as setCSS
};
