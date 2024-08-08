const beforeHook = (fn, callback) => {
  return function(...args) {
    const newArgs = callback(...args);
    return fn.apply(this, newArgs);
  };
};
export {
  beforeHook
};
