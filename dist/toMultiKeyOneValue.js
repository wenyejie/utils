const handler = {
  get: (target, prop) => {
    var _a;
    return (_a = target[prop]) == null ? void 0 : _a.value;
  },
  set: (obj, prop, value) => {
    obj[prop] = value;
    return true;
  }
};
const toMultiKeyOneValue = (data) => {
  const proxy = new Proxy({}, handler);
  if (!Array.isArray(data)) {
    console.error(`"${data}" is not a array`);
    return;
  }
  for (const [keys, value] of data) {
    const innerValue = { value };
    for (const key of keys) {
      proxy[key] = innerValue;
    }
  }
  return proxy;
};
export {
  toMultiKeyOneValue
};
