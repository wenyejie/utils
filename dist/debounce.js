import { globalThis as gt } from "./globalThis.js";
import { normalizeOptions } from "./normalizeOptions.js";
const DEBOUNCE_DEFAULT_OPTIONS = {
  timeout: 500,
  immediate: false
};
const debounce = (fn, options) => {
  let timer = 0;
  let { immediate, timeout } = normalizeOptions(options, DEBOUNCE_DEFAULT_OPTIONS);
  return function(...args) {
    clearTimeout(timer);
    if (immediate) {
      fn.apply(this, args);
      immediate = false;
    }
    timer = gt.setTimeout(fn.bind(this, args), timeout);
  };
};
export {
  debounce
};
