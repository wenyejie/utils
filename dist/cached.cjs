'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const cached = (fn) => {
  const caches = {};
  return function() {
    const args = Array.prototype.join.call(arguments, ",");
    if (args in caches) {
      return caches[args];
    }
    return caches[args] = fn.apply(this, arguments);
  };
};

exports.cached = cached;
exports.default = cached;
