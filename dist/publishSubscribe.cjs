"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const s=require("./isFunction.cjs"),l=require("./arrDelItemByProp.cjs");class c{callbackMap={};static create(){return new c}trigger(e,i){if(!e)return;const t=this.callbackMap[e]??{queue:[]},{queue:r}=t;if(t.data=i,r.length===0){this.callbackMap[e]=t;return}r.forEach(({callback:u})=>u(i)),t.queue=r.filter(({once:u})=>!u),this.callbackMap[e]=t}on(e,i,t){if(!e||!s.isFunction(i()))return;const r=this.callbackMap[e]??{queue:[]},{data:u,queue:a}=r;t?.immediate&&i(u),a.push({once:t?.once??!1,callback:i}),this.callbackMap[e]=r}off(e,i){if(!e)return;const t=this.callbackMap[e];if(!t)return;const{queue:r}=t;s.isFunction(i)?l.arrDelItemByProp(r,"callback",i):delete this.callbackMap[e]}}exports.PublishSubscribe=c;exports.default=c;
