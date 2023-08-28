"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const a=require("./globalThis.cjs"),n=require("./isFunction.cjs");require("./toRawType.cjs");require("./toTypeString.cjs");require("./objectToString.cjs");require("./decapitalize.cjs");const u={delay:1e3,decrement:1,autostart:!0,end:0};class s{value;intervalId;options;callbackQueues={};constructor(t,e){n.isFunction(e)&&this.on("change",e),this.options=Object.assign({...u},e,typeof t=="number"?{value:t}:t),this.value=this.options.value,this.options.autostart&&this.start()}on(t,e){const i=this.callbackQueues[t]??[];i.push(e),this.callbackQueues[t]=i}trigger(t){const e=this.callbackQueues[t];Array.isArray(e)&&e.forEach(i=>i.call(this,this.value))}decrease(){this.value=this.value-this.options.decrement,this.value<=this.options.end&&(clearInterval(this.intervalId),this.trigger("finish")),this.trigger("change")}loop(){this.clear(),this.intervalId=a.default.setInterval(this.decrease.bind(this),this.options.delay)}clear(){clearInterval(this.intervalId),this.intervalId=0}start(){this.options.value>this.value||(this.loop(),this.trigger("start"))}stop(){this.intervalId!==0&&(this.clear(),this.trigger("stop"))}continue(){this.intervalId===0&&(this.loop(),this.trigger("continue"))}static create(t,e){return new s(t,e)}}const r=s.create;exports.countdown=r;exports.default=r;
