import { toDate } from "./toDate.js";
import { isDate } from "./isDate.js";
const isSameMonth = (date1, date2) => {
  date1 = toDate(date1);
  date2 = toDate(date2);
  if (!isDate(date1) || !isDate(date2)) {
    console.error(`"${date1}" or "${date2}" is not a valid date`);
    return false;
  }
  return date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth();
};
export {
  isSameMonth
};
