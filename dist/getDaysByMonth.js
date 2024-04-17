import { toDate } from "./toDate.js";
const getDaysByMonth = (date) => {
  date = toDate(date);
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
};
export {
  getDaysByMonth
};
