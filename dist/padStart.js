import { isUndefined as e } from "./isUndefined.js";
const i = (t, r = 2, a = "0") => ((e(t) || Number.isNaN(t)) && (t = ""), `${t}`.padStart(r, a));
export {
  i as default,
  i as padStart
};
