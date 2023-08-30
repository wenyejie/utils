import { hyphenate as t } from "./hyphenate.js";
import p from "./globalThis.js";
const a = (o, r) => p?.CSS?.supports?.(t(o), r);
export {
  a as default,
  a as supportCSS
};
