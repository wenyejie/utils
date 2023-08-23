'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const globalThis = require('./globalThis.cjs');

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
    timer = globalThis.default.setTimeout(() => {
      clearTimeout(timer);
      fn.apply(this, rest);
    }, interval);
  };
};

exports.default = throttle;
exports.throttle = throttle;
