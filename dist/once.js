const once = (fn) => {
  let cached;
  return function() {
    return cached || (cached = fn.apply(this, arguments));
  };
};

export { once as default, once };
