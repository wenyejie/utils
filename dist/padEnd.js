import { isUndefined as d } from "./isUndefined.js";
const s = (r, n = 2, e = "0") => ((d(r) || Number.isNaN(r)) && (console.error(`${r} is not a string or number`), r = ""), `${r}`.padEnd(n, e));
export {
  s as default,
  s as padEnd
};
