'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const isDate = require('./isDate.cjs');
const camelize = require('./camelize.cjs');
require('./toRawType.cjs');
require('./toTypeString.cjs');
require('./objectToString.cjs');
require('./decapitalize.cjs');

const defOpts = {
  types: ["year", "week", "day", "hour", "minute", "second"],
  hasYear: false,
  year: 31536e6,
  hasWeek: false,
  week: 6048e5,
  hasDay: true,
  day: 864e5,
  hasHour: true,
  hour: 36e5,
  hasMinute: true,
  minute: 6e4,
  hasSecond: true,
  second: 1e3,
  hasMillisecond: false,
  millisecond: 1,
  defaultValue: ""
};
const datetimeSpan = (date, options = {}) => {
  const opts = Object.assign(
    {
      compare: /* @__PURE__ */ new Date()
    },
    defOpts,
    options
  );
  let timestamp = isDate.isDate(date) ? Math.abs(date.getTime() - opts.compare.getTime()) : Number.parseInt(date);
  const result = {};
  opts.types.forEach((name) => {
    if (opts[camelize.camelize(`has-${name}`)]) {
      result[name] = Math.floor(timestamp / opts[name]);
      timestamp %= opts[name];
    }
  });
  return result;
};

exports.datetimeSpan = datetimeSpan;
exports.default = datetimeSpan;
