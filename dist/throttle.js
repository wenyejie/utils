import globalThis from './globalThis.js';

const throttle = (fn, interval = 500, isFirst = false) => {
  let timer;
  return function(...rest) {
    if (isFirst) {
      fn.apply(this, rest);
      isFirst = false;
      return;
    }
    if (timer) {
      return;
    }
    timer = globalThis.setTimeout(() => {
      clearTimeout(timer);
      fn.apply(this, rest);
    }, interval);
  };
};

export { throttle as default, throttle };
