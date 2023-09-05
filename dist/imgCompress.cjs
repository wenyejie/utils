"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const f=require("./file2base64.cjs"),b=require("./load.cjs"),v=e=>b.load("img",e),o=async e=>{const t=await f.file2base64(e);return await v(t)},H={noCompressIfLarger:!0,maxWidth:1024,maxHeight:1024,fillStyle:"rgba(255, 255, 255, 0)",quality:.75},w=e=>new Promise(t=>{const a=document.createElement("canvas"),r=a.getContext("2d");r.fillStyle=e.fillStyle,r.fillRect(0,0,a.width,a.height),t({context:r,$canvas:a})}),g=(e,t)=>{const a=e.naturalWidth/e.naturalHeight;let r,l,n=0,s=0,i=0,c=0,u=e.naturalWidth,d=e.naturalHeight;return a>=1?(t.maxWidth>0?r=e.naturalWidth>t.maxWidth?t.maxWidth:e.naturalWidth:r=e.naturalWidth,l=r/a):(t.maxHeight>0?l=e.naturalHeight>t.maxHeight?t.maxHeight:e.naturalHeight:l=e.naturalHeight,r=l*a),{dw:r,dh:l,dx:n,dy:s,sx:i,sy:c,sw:u,sh:d}},m=(e,t,a)=>new Promise(r=>{e.toBlob(l=>{r(new File([l],t.name,{type:t.type}))},t.type,a.quality)}),W=async(e,t)=>{t=Object.assign({...H},t);const a=await o(e),{context:r,$canvas:l}=await w(t);if(!l.toBlob)return e;const{dw:n,dh:s,dx:i,dy:c,sx:u,sy:d,sw:x,sh:y}=g(a,t);l.width=n,l.height=s,r.drawImage(a,u,d,x,y,i,c,n,s);const h=await m(l,e,t);return t.noCompressIfLarger&&e.size<=h.size||h.size<1024?e:h};exports.calcDrawSize=g;exports.canvas2file=m;exports.createCanvas=w;exports.default=W;exports.file2img=o;
