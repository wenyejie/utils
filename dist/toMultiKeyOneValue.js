import { isArray } from './isArray.js';

const handler = {
  get: (target, prop) => {
    return target[prop]?.value;
  },
  set: (obj, prop, value) => {
    let keys = [];
    if (keys.includes(",")) {
      keys = prop.split(",");
    }
    keys = isArray(keys) ? keys : [prop];
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
  if (!isArray(data)) {
    console.error("Error parameter", data);
  }
  for (const [keys, value] of data) {
    proxy[keys] = value;
  }
  return proxy;
};

export { toMultiKeyOneValue as default, toMultiKeyOneValue };
