'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const handler = {
  get: (target, prop) => {
    return target[prop]?.value;
  },
  set: (obj, prop, value) => {
    let keys = [];
    if (keys.includes(",")) {
      keys = prop.split(",");
    }
    keys = Array.isArray(keys) ? keys : [prop];
    const pkgVal = obj[keys.find((key) => obj[key])] || { value };
    for (const key of keys) {
      obj[key] = pkgVal;
    }
    return true;
  }
};
const toMultiKeyOneValue = (data) => {
  const target = {};
  const proxy = new Proxy(target, handler);
  if (!Array.isArray(data)) {
    console.error("Error parameter", data);
  }
  for (const [keys, value] of data) {
    proxy[keys] = value;
  }
  return proxy;
};

exports.default = toMultiKeyOneValue;
exports.toMultiKeyOneValue = toMultiKeyOneValue;
