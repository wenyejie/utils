"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});class i{storage;key;constructor(t,e="v"){this.storage=t,this.key=e}get(t){let e;try{e=JSON.parse(this.storage?.getItem(t))?.[this.key]}catch(r){throw new Error(r)}return e}set(t,e){try{this.storage?.setItem(t,JSON.stringify({[this.key]:e}))}catch(r){throw new Error(r)}}remove(t){this.storage?.removeItem(t)}}const a=(s,t)=>{const e=new i(s,t);return(r,o)=>{if(r)switch(o){case void 0:return e.get(r);case null:e.remove(r);break;default:e.set(r,o);break}}};exports.default=a;exports.storage=a;