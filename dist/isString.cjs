"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const t=require("./toRawType.cjs");require("./toTypeString.cjs");require("./objectToString.cjs");require("./decapitalize.cjs");const r=e=>t.toRawType(e)==="string"&&e.trim().length>0;exports.default=r;exports.isString=r;
