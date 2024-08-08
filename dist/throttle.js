import { globalThis as gt } from "./globalThis.js";
import { normalizeOptions } from "./normalizeOptions.js";
const DEFAULT_OPTIONS = {
  timeout: 500,
  immediate: false
};
const throttle = (fn, options) => {
  let timer = 0;
  let { immediate, timeout } = normalizeOptions(options, DEFAULT_OPTIONS);
  return function(...args) {
    if (immediate) {
      fn.apply(this, args);
      immediate = false;
      return;
    }
    if (timer) {
      return;
    }
    timer = gt.setTimeout(() => {
      clearTimeout(timer);
      timer = 0;
      fn.apply(this, args);
    }, timeout);
  };
};
export {
  throttle
};
