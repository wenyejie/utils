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

export { cached, cached as default };
