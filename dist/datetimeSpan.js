import { isDate } from "./isDate.js";
import { TS_UNIT } from "./utils.js";
const DEFAULT_OPTIONS = {
  types: ["year", "week", "day", "hour", "minute", "second"]
};
const normalizedOptions = (options) => {
  const innerOptions = { ...DEFAULT_OPTIONS };
  if (isDate(options)) {
    innerOptions.compare = options;
  } else if (Array.isArray(options)) {
    innerOptions.types = options;
  } else {
    Object.assign(innerOptions, options);
  }
  return innerOptions;
};
const datetimeSpan = (date, options) => {
  const { compare, types } = normalizedOptions(options);
  let timestamp = isDate(date) ? Math.abs(date.getTime() - (compare ?? /* @__PURE__ */ new Date()).getTime()) : Number.parseInt(date);
  const result = {};
  for (const type of types) {
    result[type] = Math.floor(timestamp / TS_UNIT[type.toUpperCase()]);
    timestamp %= TS_UNIT[type.toUpperCase()];
  }
  return result;
};
export {
  datetimeSpan
};
