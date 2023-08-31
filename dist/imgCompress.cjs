"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const q=require("./file2base64.cjs"),f=require("./load.cjs");require("./isFunction.cjs");require("./toRawType.cjs");require("./toTypeString.cjs");require("./objectToString.cjs");require("./decapitalize.cjs");require("./isObject.cjs");require("./hasOwn.cjs");require("./hasOwnProperty.cjs");require("./isUndefined.cjs");require("./isNull.cjs");const b=e=>f.load("img",e),o=async e=>{const t=await q.file2base64(e);return await b(t)},v={noCompressIfLarger:!0,maxWidth:1024,maxHeight:1024,fillStyle:"rgba(255, 255, 255, 0)",quality:.75},w=e=>new Promise(t=>{const a=document.createElement("canvas"),r=a.getContext("2d");r.fillStyle=e.fillStyle,r.fillRect(0,0,a.width,a.height),t({context:r,$canvas:a})}),g=(e,t)=>{const a=e.naturalWidth/e.naturalHeight;let r,i,l=0,n=0,s=0,u=0,c=e.naturalWidth,d=e.naturalHeight;return a>=1?(t.maxWidth>0?r=e.naturalWidth>t.maxWidth?t.maxWidth:e.naturalWidth:r=e.naturalWidth,i=r/a):(t.maxHeight>0?i=e.naturalHeight>t.maxHeight?t.maxHeight:e.naturalHeight:i=e.naturalHeight,r=i*a),{dw:r,dh:i,dx:l,dy:n,sx:s,sy:u,sw:c,sh:d}},m=(e,t,a)=>new Promise(r=>{e.toBlob(i=>{r(new File([i],t.name,{type:t.type}))},t.type,a.quality)}),H=async(e,t)=>{t=Object.assign({...v},t);const a=await o(e),{context:r,$canvas:i}=await w(t);if(!i.toBlob)return e;const{dw:l,dh:n,dx:s,dy:u,sx:c,sy:d,sw:x,sh:y}=g(a,t);i.width=l,i.height=n,r.drawImage(a,c,d,x,y,s,u,l,n);const h=await m(i,e,t);return t.noCompressIfLarger&&e.size<=h.size||h.size<1024?e:h};exports.calcDrawSize=g;exports.canvas2file=m;exports.createCanvas=w;exports.default=H;exports.file2img=o;