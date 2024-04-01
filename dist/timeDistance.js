import { toDate as m } from "./toDate.js";
import { datetimeSpan as o } from "./datetimeSpan.js";
import { dateFormat as t } from "./dateFormat.js";
import { isDate as u } from "./isDate.js";
const y = (a, r) => {
  if (a = m(a), !u(a))
    return console.error(`"${a}" is not a valid date`), "";
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
  const e = o(a, { compare: r.compare });
  return e.year > 0 ? t(a, r.yearFormat) : e.day > 0 && e.day <= r.days ? t(a, r.dayFormat) : e.hour > 0 ? e.hour + r.hoursAgo : e.minute > 0 ? e.minute + r.minutesAgo : r.just;
};
export {
  y as default,
  y as timeDistance
};
