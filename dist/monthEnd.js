import { dayEnd } from "./dayEnd.js";
const monthEnd = (date) => {
  date.setMonth(date.getMonth() + 1, 0);
  dayEnd(date);
  return date;
};
export {
  monthEnd
};
