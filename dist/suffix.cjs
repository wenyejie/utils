"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const t=require("./isString.cjs"),u=e=>{if(!t.isString(e))return console.error(`"${e}" is not a string`),"";e=e.trim();const{groups:{suffix:r}}=e.match(/(?<=\.)(?<suffix>\w+)+$/);return r};exports.default=u;exports.suffix=u;
