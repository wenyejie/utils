import { isDate } from './isDate.js';
import { camelize } from './camelize.js';
import './toRawType.js';
import './toTypeString.js';
import './objectToString.js';
import './decapitalize.js';

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
  const opts = Object.assign(
    {
      compare: /* @__PURE__ */ new Date()
    },
    defOpts,
    options
  );
  let timestamp = isDate(date) ? Math.abs(date.getTime() - opts.compare.getTime()) : Number.parseInt(date);
  const result = {};
  typeArr.forEach((name) => {
    if (opts[camelize(`has-${name}`)]) {
      result[name] = Math.floor(timestamp / opts[name]);
      timestamp %= opts[name];
    }
  });
  return result;
};

export { datetimeSpan, datetimeSpan as default };
