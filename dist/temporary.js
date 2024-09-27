const CACHED_PLACEHOLDER = Symbol("CACHED_PLACEHOLDER");
const temporary = (fn, timeout = 500) => {
  let cached = CACHED_PLACEHOLDER;
  return function() {
    if (cached !== CACHED_PLACEHOLDER) {
      return cached;
    }
    cached = fn.apply(this, arguments);
    setTimeout(() => {
      cached = CACHED_PLACEHOLDER;
    }, timeout);
    return cached;
  };
};
export {
  temporary as default,
  temporary
};
