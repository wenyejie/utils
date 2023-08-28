import { isUndefined as r } from "./isUndefined.js";
const i = (d, e = 2, n = "0") => ((r(d) || Number.isNaN(d)) && (d = ""), `${d}`.padEnd(e, n));
export {
  i as default,
  i as padEnd
};
