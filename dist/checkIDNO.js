import { rIDCardNO as n } from "./regexp.js";
const a = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2], l = ["1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"], f = (c) => {
  const e = (c + "").toLocaleUpperCase();
  if (!n.test(e))
    return !1;
  const r = e.substring(0, 17).split(""), s = r.length;
  let o = 0;
  for (let t = 0; t < s; t++)
    o = o + +r[t] * a[t];
  return l[o % 11] === e[17];
};
export {
  f as checkIDNO,
  f as default
};
