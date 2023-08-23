'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const globalThis = require('./globalThis.cjs');

const debounce = (fn, interval = 500, isFirst = false) => {
  let timer;
  return function(...rest) {
    clearTimeout(timer);
    if (isFirst) {
      fn.apply(this, rest);
      isFirst = false;
    }
    timer = globalThis.default.setTimeout(() => {
      fn.apply(this, rest);
    }, interval);
  };
};

exports.debounce = debounce;
exports.default = debounce;
