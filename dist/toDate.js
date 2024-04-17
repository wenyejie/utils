import { isDate } from "./isDate.js";
import { isNumber } from "./isNumber.js";
import { isString } from "./isString.js";
import { rInteger, rIOSDateStringFormat } from "./regexp.js";
import { isInvalidDate } from "./isInvalidDate.js";
import { isObject } from "./isObject.js";
import { nullProtoObject } from "./nullProtoObject.js";
const normalizedOptions = (options) => {
  const normalized = nullProtoObject();
  if (typeof options === "boolean") {
    normalized.toNew = options;
  } else if (isObject(options)) {
    Object.assign(normalized, options);
  } else {
    normalized.defaultValue = options;
  }
  return normalized;
};
const toDate = (date, options) => {
  const innerOptions = normalizedOptions(options);
  if (!date || isInvalidDate(date)) {
    console.error(`"${date}" is not valid date`);
    return innerOptions.defaultValue;
  }
  if (isDate(date)) {
    return innerOptions.toNew ? new Date(date) : date;
  }
  if (isString(date)) {
    if (rInteger.test(date)) {
      date = Number.parseInt(date);
    } else if (rIOSDateStringFormat.test(date)) {
      date = date.replace(/-/g, "/");
    }
  }
  if (isNumber(date)) {
    let ts = Number.parseInt(date + "") + "";
    if (ts.length > 13) {
      ts = ts.substring(0, 13);
    } else if (ts.length < 13) {
      ts = ts.padEnd(13, "0");
    }
    date = Number.parseInt(ts);
  }
  date = new Date(date);
  if (isInvalidDate(date)) {
    return innerOptions.defaultValue;
  }
  return date;
};
export {
  toDate
};
