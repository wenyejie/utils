"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const g=require("./toNumber.cjs");require("./isNumber.cjs");require("./toRawType.cjs");require("./toTypeString.cjs");require("./objectToString.cjs");require("./decapitalize.cjs");require("./isString.cjs");const a=["角","分"],s=["零","壹","贰","叁","肆","伍","陆","柒","捌","玖"],f=["","拾","佰","仟"],p=["","万","亿"],d=/零[拾佰仟]/g,m=/零+([万亿])/g,q=/零{2,}/,u=l=>{l=g.toNumber(l);let c;const t=l.toString().replace(/\.\d+$/,"").split(""),i=l.toString().replace(/^\d+\.?/,"").split("");for(let e=t.length-1,n=0;e>=0;e--,n++)t[e]==="0"&&e>0&&e<t.length-1?t[e]="零":t[e]=s[t[e]]+f[n%4],t[e]+=n%4===0?p[n/4]:"";for(let e=0;e<i.length;e++)i[e]!=="0"?i[e]=s[i[e]]+a[e]:i[e]="";let r=t.join("").replace(d,"").replace(m,"$1").replace(q,"零");r.length>1&&(r=r.replace(/零$/,"")),r.length>=1&&(r+="元");let o=i.join("");return o===""?o="整":r=r.replace(/^零元$/,""),c=r+o,c};exports.default=u;exports.money2cn=u;
