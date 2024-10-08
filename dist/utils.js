const TS_YEAR = 31536e6;
const TS_WEEK = 6048e5;
const TS_DAY = 864e5;
const TS_HOUR = 36e5;
const TS_MINUTE = 6e4;
const TS_SECOND = 1e3;
const TS_MILLISECOND = 1;
var TS_UNIT = /* @__PURE__ */ ((TS_UNIT2) => {
  TS_UNIT2[TS_UNIT2["YEAR"] = TS_YEAR] = "YEAR";
  TS_UNIT2[TS_UNIT2["WEEK"] = TS_WEEK] = "WEEK";
  TS_UNIT2[TS_UNIT2["DAY"] = TS_DAY] = "DAY";
  TS_UNIT2[TS_UNIT2["HOUR"] = TS_HOUR] = "HOUR";
  TS_UNIT2[TS_UNIT2["MINUTE"] = TS_MINUTE] = "MINUTE";
  TS_UNIT2[TS_UNIT2["SECOND"] = TS_SECOND] = "SECOND";
  TS_UNIT2[TS_UNIT2["MILLISECOND"] = TS_MILLISECOND] = "MILLISECOND";
  return TS_UNIT2;
})(TS_UNIT || {});
const PLACEHOLDER = Symbol();
export {
  PLACEHOLDER,
  TS_DAY,
  TS_HOUR,
  TS_MILLISECOND,
  TS_MINUTE,
  TS_SECOND,
  TS_UNIT,
  TS_WEEK,
  TS_YEAR
};
