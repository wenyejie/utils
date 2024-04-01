import { toDate as o } from "./toDate.js";
import { isDate as a } from "./isDate.js";
const l = (t, n = "range") => {
  t = o(t);
  const e = {
    start: null,
    end: null
  };
  if (!a(t))
    return console.error(`"${t}" is not a valid date`), n === "range" ? e : null;
  const s = new Date(t);
  if (n !== "end" && (s.setDate(1), s.setHours(0, 0, 0, 0), n === "start"))
    return s;
  const r = new Date(t);
  return n !== "start" && (r.setMonth(r.getMonth() + 1, 0), r.setHours(23, 59, 59, 999), n === "end") ? r : (e.start = s, e.end = r, e);
};
export {
  l as default,
  l as monthRange
};
