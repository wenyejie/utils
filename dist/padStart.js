import { isUndefined as a } from "./isUndefined.js";
const i = (r, t = 2, e = "0") => ((a(r) || Number.isNaN(r)) && (console.error(`${r} is not a string or number`), r = ""), `${r}`.padStart(t, e));
export {
  i as default,
  i as padStart
};
