"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=[/^[\da-z]{10,15}$/i,/^\d{6}[\da-z]{10,12}$/i,/^[a-z]\d{6}[\da-z]{9,11}$/i,/^[a-z]{2}\d{6}[\da-z]{8,10}$/i,/^\d{14}[\dx][\da-z]{4,5}$/i,/^\d{17}[\dx][\da-z]{1,2}$/i,/^[a-z]\d{14}[\dx][\da-z]{3,4}$/i,/^[a-z]\d{17}[\dx][\da-z]{0,1}$/i,/^\d{6}[\da-z]{13,14}$/i],a=t=>{const r=e.length;for(let d=0;d<r;d++)if(e[d].test(t))return!0;return!1};exports.checkTaxpayerIDNO=a;exports.default=a;