"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const l=require("./isObject.cjs");require("./toRawType.cjs");require("./decapitalize.cjs");const o=(e,i)=>{if(!Array.isArray(e)&&!l.isObject(e)){console.error(`"${e}" is not array or object`);return}if(Array.isArray(e))for(let r=0;r<e.length&&i(e[r],r,e)!==!1;r++);else for(const[r,s]of Object.entries(e))if(i(s,r,e)===!1)break};exports.default=o;exports.each=o;
