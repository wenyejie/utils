"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const f=require("./globalThis.cjs"),v=require("./isPromise.cjs"),r={timeout:300,immediate:!0},b=e=>typeof e=="number"?{...r,timeout:e}:typeof e=="boolean"?{...r,immediate:e}:{...r,...e},n=(e,s={})=>{const{timeout:u,immediate:a}=b(s);return(...i)=>{const{resolve:c,promise:m}=Promise.withResolvers();let l=0;const o=async d=>{let t=e(...d);if(v.isPromise(t))try{t=await t}catch{t=null}t&&(clearInterval(l),c(t))};return l=f.globalThis.setInterval(o.bind(null,i),u),a&&o(i),m}};exports.default=n;exports.intervalExec=n;
