"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const l=require("./regexp.cjs"),u=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],a=["1","0","X","9","8","7","6","5","4","3","2"],o=s=>{const t=(s+"").toLocaleUpperCase();if(!l.rIDCardNO.test(t))return!1;const c=t.substring(0,17).split(""),n=c.length;let r=0;for(let e=0;e<n;e++)r=r+ +c[e]*u[e];return a[r%11]===t[17]};exports.checkIDNO=o;exports.default=o;