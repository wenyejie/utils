'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const isDate = require('./isDate.cjs');
const camelize = require('./camelize.cjs');
require('./toRawType.cjs');
require('./toTypeString.cjs');
require('./objectToString.cjs');

const defOpts = {
  hasYear: true,
  year: 31536e6,
  hasMonth: false,
  month: 2592e6,
  hasDay: true,
  day: 864e5,
  hasHour: true,
  hour: 36e5,
  hasMinute: true,
  minute: 6e4,
  hasSecond: false,
  second: 1e3,
  hasMillisecond: false,
  millisecond: 1,
  defaultValue: ""
};
const typeArr = ["year", "month", "day", "hour", "minute", "second", "millisecond"];
const datetimeSpan = (date, options = {}) => {
  const opts = Object.assign({
    compare: /* @__PURE__ */ new Date()
  }, defOpts, options);
  let timestamp = isDate.isDate(date) ? Math.abs(date.getTime() - opts.compare.getTime()) : Number.parseInt(date);
  const result = {};
  typeArr.forEach((name) => {
    if (opts[camelize.camelize(`has-${name}`)]) {
      result[name] = Math.floor(timestamp / opts[name]);
      timestamp %= opts[name];
    }
  });
  return result;
};

exports.datetimeSpan = datetimeSpan;
exports.default = datetimeSpan;
