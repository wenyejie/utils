import { PLACEHOLDER } from "./utils.js";
import { normalizeOptions } from "./normalizeOptions.js";
import { isPositiveNumber } from "./isPositiveNumber.js";
const TEMPORARY_DEFAULT_OPTIONS = {
  timeout: 500,
  needRemove: false
};
const temporary = (fn, options) => {
  const { timeout, needRemove } = normalizeOptions(options, TEMPORARY_DEFAULT_OPTIONS);
  let cached = PLACEHOLDER;
  let timer = 0;
  const rtnFn = function() {
    if (cached !== PLACEHOLDER) {
      return cached;
    }
    cached = fn.apply(this, arguments);
    if (isPositiveNumber(timeout)) {
      timer = window.setTimeout(() => cached = PLACEHOLDER, timeout);
    }
    return cached;
  };
  if (needRemove) {
    return [
      rtnFn,
      () => {
        clearTimeout(timer);
        cached = PLACEHOLDER;
      }
    ];
  } else {
    return rtnFn;
  }
};
export {
  temporary
};
