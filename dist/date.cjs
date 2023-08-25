'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const toDate = require('./toDate.cjs');
const datetimeSpan = require('./datetimeSpan.cjs');
const dateFormat = require('./dateFormat.cjs');
const isDate = require('./isDate.cjs');
require('./isNumber.cjs');
require('./toRawType.cjs');
require('./toTypeString.cjs');
require('./objectToString.cjs');
require('./decapitalize.cjs');
require('./isString.cjs');
require('./regexp.cjs');
require('./isInvalidDate.cjs');
require('./camelize.cjs');
require('./padStart.cjs');
require('./isUndefined.cjs');

const timeDistance = (date, options) => {
  date = toDate.toDate(date);
  if (!isDate.isDate(date)) {
    return "";
  }
  options = Object.assign(
    {
      yearFormat: "YYYY-MM-DD",
      dayFormat: "MM-DD",
      hoursAgo: "小时前",
      minutesAgo: "分前",
      daysAgo: "天前",
      days: 31,
      just: "刚刚",
      compare: /* @__PURE__ */ new Date()
    },
    options
  );
  const span = datetimeSpan.datetimeSpan(date, { compare: options.compare });
  if (span.year > 0) {
    return dateFormat.dateFormat(date, options.yearFormat);
  }
  if (span.day > 0 && span.day <= options.days) {
    return dateFormat.dateFormat(date, options.dayFormat);
  }
  if (span.hour > 0) {
    return span.hour + options.hoursAgo;
  }
  if (span.minute > 0) {
    return span.minute + options.minutesAgo;
  }
  return options.just;
};

exports.default = timeDistance;
exports.timeDistance = timeDistance;
