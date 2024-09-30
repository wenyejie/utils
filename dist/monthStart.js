import { dayStart } from "./dayStart.js";
const monthStart = (date) => {
  date.setDate(1);
  dayStart(date);
  return date;
};
export {
  monthStart
};
