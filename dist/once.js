const CACHED_PLACEHOLDER = Symbol("CACHED_PLACEHOLDER");
const once = (fn) => {
  let cached = CACHED_PLACEHOLDER;
  return function() {
    if (cached !== CACHED_PLACEHOLDER) {
      return cached;
    }
    cached = fn.apply(this, arguments);
    return cached;
  };
};
export {
  once
};
