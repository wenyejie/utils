"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const o=require("./isDate.cjs"),l=require("./camelize.cjs");require("./toRawType.cjs");require("./toTypeString.cjs");require("./objectToString.cjs");require("./decapitalize.cjs");const c={types:["year","week","day","hour","minute","second"],hasYear:!1,year:31536e6,hasWeek:!1,week:6048e5,hasDay:!0,day:864e5,hasHour:!0,hour:36e5,hasMinute:!0,minute:6e4,hasSecond:!0,second:1e3,hasMillisecond:!1,millisecond:1,defaultValue:""},i=(s,u)=>{const e=Object.assign({compare:new Date},c,u);let a=o.isDate(s)?Math.abs(s.getTime()-e.compare.getTime()):Number.parseInt(s);const r={};return e.types.forEach(t=>{e[l.camelize(`has-${t}`)]&&(r[t]=Math.floor(a/e[t]),a%=e[t])}),r};exports.datetimeSpan=i;exports.default=i;