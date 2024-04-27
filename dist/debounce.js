import { globalThis as gt } from "./globalThis.js";
import { normalizeOptions } from "./normalizeOptions.js";
const DEBOUNCE_DEFAULT_OPTIONS = {
  timeout: 500,
  immediate: false
};
const DEBOUNCE_TYPES = {
  "number": "timeout",
  "boolean": "immediate"
};
const debounce = (fn, options) => {
  let timer = 0;
  const { immediate, timeout } = normalizeOptions(options, DEBOUNCE_TYPES, DEBOUNCE_DEFAULT_OPTIONS);
  let innerImmediate = immediate;
  return function(...rest) {
    clearTimeout(timer);
    if (innerImmediate) {
      fn.apply(this, rest);
      innerImmediate = false;
    }
    timer = gt.setTimeout(fn.bind(this, rest), timeout);
  };
};
export {
  debounce
};
