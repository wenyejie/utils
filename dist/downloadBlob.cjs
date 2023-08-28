"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const i=require("./downloadFile.cjs"),l=require("./isBlob.cjs"),a=require("./suffix.cjs"),o=require("./globalThis.cjs");require("./isString.cjs");require("./toRawType.cjs");require("./toTypeString.cjs");require("./objectToString.cjs");require("./decapitalize.cjs");const u=(r,e)=>{if(!l.isBlob(r))throw new Error("参数错误: blob不是Blob类型");if(a.suffix(e)||(e=e+"."+r.type.replace(/image\//,""),console.warn("参数错误: filename没有后缀名")),o.default.navigator?.msSaveBlob){o.default.navigator?.msSaveBlob(r,e);return}const t=o.default.URL.createObjectURL(r);i.downloadFile(t,e),o.default.URL.revokeObjectURL(t)};exports.default=u;exports.downloadBlob=u;
