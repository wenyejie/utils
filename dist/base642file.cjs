"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const l=require("./globalThis.cjs"),n=require("./hasSuffix.cjs");require("./isString.cjs");require("./toRawType.cjs");require("./toTypeString.cjs");require("./objectToString.cjs");require("./decapitalize.cjs");const o=(a,e)=>{const t=a.split(","),u=t[0].match(/:(.*?);/)[1],s=l.default.atob(t[1]);let r=s.length;const i=new Uint8Array(r);for(;r--;)i[r]=s.charCodeAt(r);return e=n.hasSuffix(e)?e:`${e}.${u.substring(6)}`,new File([i],e,{type:u})};exports.base642file=o;exports.default=o;
