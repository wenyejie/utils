import { isString } from "./isString.js";
import { isNumber } from "./isNumber.js";
import { isNumberString } from "./isNumberString.js";
import { toMultiKeyOneValue } from "./toMultiKeyOneValue.js";
import { TS_UNIT } from "./utils.js";
const strMap = toMultiKeyOneValue([
  [["s", "sec", "second"], TS_UNIT.SECOND],
  [["m", "min", "minute"], TS_UNIT.MINUTE],
  [["h", "hour"], TS_UNIT.HOUR],
  [["d", "day"], TS_UNIT.DAY],
  [["w", "week"], TS_UNIT.WEEK],
  [["y", "year"], TS_UNIT.YEAR]
]);
const rTsStr = /^(?<num>\d+(\.\d+)?)(?<unit>s(ec(ond)?)?|m(in(ute)?)?|h(our)?|d(ay)?|w(eek)?|y(ear)?)$/i;
const getTsByStr = (str, rtnType = "millisecond") => {
  if (!isNumber(str) && !isString(str)) {
    console.error(`"${str}" is not a number or string`);
    return null;
  }
  if (isNumber(str)) {
    return str;
  }
  str = str.trim();
  if (isNumberString(str)) {
    return Math.floor(+str);
  }
  const result = str.match(rTsStr);
  if (!result) {
    console.error(`getTsByStr: Incorrect timestamp string parameter => "${str}"`);
    return null;
  }
  let { num, unit } = result.groups;
  const rtnValue = +num * strMap[unit.toLowerCase()];
  if (rtnType === "second") {
    return Math.floor(rtnValue / 1e3);
  }
  return Math.floor(rtnValue);
};
export {
  getTsByStr
};
