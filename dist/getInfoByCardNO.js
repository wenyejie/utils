import { isOddNumber as n } from "./isOddNumber.js";
import { checkIDNO as i } from "./checkIDNO.js";
const u = (s) => {
  const t = {};
  return i(s) && Object.assign(t, {
    province: s.substring(0, 2),
    city: s.substring(2, 4),
    area: s.substring(4, 6),
    address: s.substring(0, 6),
    year: s.substring(6, 10),
    month: s.substring(10, 12),
    day: s.substring(12, 14),
    date: s.substring(6, 14),
    sex: n(+s.substring(16, 17)) ? "1" : "2"
    // male, female
  }), t;
};
export {
  u as default,
  u as getInfoByCardNO
};
