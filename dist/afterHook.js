const afterHook = (fn, callback) => {
  return function(...args) {
    const result = fn.apply(this, args);
    return callback(result);
  };
};
export {
  afterHook
};
