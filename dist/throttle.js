import { globalThis as gt } from "./globalThis.js";
import { normalizeOptions } from "./normalizeOptions.js";
const DEFAULT_OPTIONS = {
  timeout: 500,
  immediate: false
};
const THROTTLE_TYPES = {
  "number": "timeout",
  "boolean": "immediate"
};
const throttle = (fn, options) => {
  let timer = 0;
  const { immediate, timeout } = normalizeOptions(options, THROTTLE_TYPES, DEFAULT_OPTIONS);
  let innerImmediate = immediate;
  return function(...rest) {
    if (innerImmediate) {
      fn.apply(this, rest);
      innerImmediate = false;
      return;
    }
    if (timer) {
      return;
    }
    timer = gt.setTimeout(() => {
      clearTimeout(timer);
      fn.apply(this, rest);
    }, timeout);
  };
};
export {
  throttle
};
