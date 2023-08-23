'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const once = (fn) => {
  let cached;
  return function() {
    return cached || (cached = fn.apply(this, arguments));
  };
};

exports.default = once;
exports.once = once;
