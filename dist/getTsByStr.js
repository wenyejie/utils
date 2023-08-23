import { isString } from './isString.js';
import { isNumber } from './isNumber.js';
import { isNumberString } from './isNumberString.js';
import { toMultiKeyOneValue } from './toMultiKeyOneValue.js';
import './toRawType.js';
import './toTypeString.js';
import './objectToString.js';

const strMap = toMultiKeyOneValue([
  [["s", "sec", "second"], 1e3],
  [["m", "min", "minute"], 6e4],
  [["h", "hour"], 36e5],
  [["d", "day"], 864e5],
  [["w", "week"], 6048e5],
  [["y", "year"], 31536e6]
]);
const rTsStr = /^(?<num>\d+(\.\d+)?)(?<unit>s(ec(ond)?)?|m(in(ute)?)?|h(our)?|d(ay)?|w(eek)?|y(ear)?)$/i;
const getTsByStr = (str, rtnType = "millisecond") => {
  if (!isNumber(str) && !isString(str)) {
    console.error(`getTsByStr: str is type error => ${str.toString()}`);
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
    console.error(`getTsByStr: Incorrect timestamp string parameter => ${str}`);
    return null;
  }
  let { num, unit } = result.groups;
  const rtnValue = +num * strMap[unit.toLowerCase()];
  if (rtnType === "second") {
    return Math.floor(rtnValue / 1e3);
  }
  return Math.floor(rtnValue);
};

export { getTsByStr as default, getTsByStr };
