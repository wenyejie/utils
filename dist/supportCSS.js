import { hyphenate } from "./hyphenate.js";
import { globalThis as gt } from "./globalThis.js";
const supportCSS = (prop, value) => {
  var _a, _b, _c;
  return (_c = (_b = (_a = gt) == null ? void 0 : _a.CSS) == null ? void 0 : _b.supports) == null ? void 0 : _c.call(_b, hyphenate(prop), value);
};
export {
  supportCSS
};
