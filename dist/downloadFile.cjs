"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const i=require("./isString.cjs");require("./toRawType.cjs");require("./toTypeString.cjs");require("./objectToString.cjs");require("./decapitalize.cjs");const o=(t,r="")=>{if(!i.isString(t)){console.error(`${t} is not a string`);return}const e=document.createElement("a");e.style.display="none",e.href=t,e.setAttribute("download",r),e.download||e.setAttribute("target","_blank"),document.body.appendChild(e),e.click(),document.body.removeChild(e)};exports.default=o;exports.downloadFile=o;
