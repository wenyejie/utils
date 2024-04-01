import { toDate as e } from "./toDate.js";
const r = (t) => (t = e(t), new Date(t.getFullYear(), t.getMonth() + 1, 0).getDate());
export {
  r as default,
  r as getDaysByMonth
};
