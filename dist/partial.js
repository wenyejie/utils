import { PLACEHOLDER } from "./utils.js";
const PARTIAL_PLACEHOLDER = PLACEHOLDER;
const partial = (fn, ...partials) => {
  return function(...args) {
    var _a;
    const params = [...partials];
    const paramsEntries = params.entries();
    let next;
    do {
      next = paramsEntries.next();
      if (((_a = next == null ? void 0 : next.value) == null ? void 0 : _a[1]) === PARTIAL_PLACEHOLDER) {
        params[next.value[0]] = args.shift();
      }
    } while (!next.done && args.length > 0);
    return fn.apply(this, params);
  };
};
export {
  PARTIAL_PLACEHOLDER,
  partial
};
