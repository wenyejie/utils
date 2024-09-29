import { PLACEHOLDER } from "./utils.js";
const once = (fn, needRemove) => {
  let cached = PLACEHOLDER;
  const rtnFn = function() {
    if (cached !== PLACEHOLDER) {
      return cached;
    }
    cached = fn.apply(this, arguments);
    return cached;
  };
  if (needRemove) {
    return [rtnFn, () => cached = PLACEHOLDER];
  } else {
    return rtnFn;
  }
};
export {
  once
};
