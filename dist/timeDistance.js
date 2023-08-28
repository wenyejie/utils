import { toDate as o } from "./toDate.js";
import { datetimeSpan as e } from "./datetimeSpan.js";
import { dateFormat as a } from "./dateFormat.js";
import { isDate as i } from "./isDate.js";
import "./isNumber.js";
import "./toRawType.js";
import "./toTypeString.js";
import "./objectToString.js";
import "./decapitalize.js";
import "./isString.js";
import "./regexp.js";
import "./isInvalidDate.js";
import "./camelize.js";
import "./padStart.js";
import "./isUndefined.js";
const j = (t, r) => {
  if (t = o(t), !i(t))
    return "";
  r = Object.assign(
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
    r
  );
  const m = e(t, { compare: r.compare });
  return m.year > 0 ? a(t, r.yearFormat) : m.day > 0 && m.day <= r.days ? a(t, r.dayFormat) : m.hour > 0 ? m.hour + r.hoursAgo : m.minute > 0 ? m.minute + r.minutesAgo : r.just;
};
export {
  j as default,
  j as timeDistance
};
