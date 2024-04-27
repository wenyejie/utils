"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const isString = require("./isString.cjs");
const isNumber = require("./isNumber.cjs");
const isNumberString = require("./isNumberString.cjs");
const toMultiKeyOneValue = require("./toMultiKeyOneValue.cjs");
const utils = require("./utils.cjs");
const strMap = toMultiKeyOneValue.toMultiKeyOneValue([
  [["s", "sec", "second"], utils.TS_UNIT.SECOND],
  [["m", "min", "minute"], utils.TS_UNIT.MINUTE],
  [["h", "hour"], utils.TS_UNIT.HOUR],
  [["d", "day"], utils.TS_UNIT.DAY],
  [["w", "week"], utils.TS_UNIT.WEEK],
  [["y", "year"], utils.TS_UNIT.YEAR]
]);
const rTsStr = /^(?<num>\d+(\.\d+)?)(?<unit>s(ec(ond)?)?|m(in(ute)?)?|h(our)?|d(ay)?|w(eek)?|y(ear)?)$/i;
const getTsByStr = (str, rtnType = "millisecond") => {
  if (!isNumber.isNumber(str) && !isString.isString(str)) {
    console.error(`"${str}" is not a number or string`);
    return null;
  }
  if (isNumber.isNumber(str)) {
    return str;
  }
  str = str.trim();
  if (isNumberString.isNumberString(str)) {
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
exports.getTsByStr = getTsByStr;
