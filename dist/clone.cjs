"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const y=require("./isPrimitive.cjs"),f=require("./toRawType.cjs");require("./decapitalize.cjs");const c={set:Set,map:Map,weakSet:WeakSet,weakMap:WeakMap},u=(e,l=!0,t=new WeakMap)=>{const r=f.toRawType(e);if(y.isPrimitive(e)||r==="function")return e;if(r in c)return new c[r](e);if(t.get(e))return t.get(e);const i=r==="array"?[]:{};t.set(e,i);const a=Object.keys(e);let n;for(let s=0,o=a.length;s<o;s++)n=a[s],i[n]=l?u(e[n],l,t):e[n];return i};exports.clone=u;exports.default=u;
