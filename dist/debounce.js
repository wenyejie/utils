import globalThis from './globalThis.js';

const debounce = (fn, interval = 500, isFirst = false) => {
  let timer;
  return function(...rest) {
    clearTimeout(timer);
    if (isFirst) {
      fn.apply(this, rest);
      isFirst = false;
    }
    timer = globalThis.setTimeout(() => {
      fn.apply(this, rest);
    }, interval);
  };
};

export { debounce, debounce as default };
