"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const b=require("./env.cjs"),u=require("./isNumber.cjs");let e;const h=`
  height:0 !important;
  visibility:hidden !important;
  ${b.isFirefox()?"":"overflow:hidden !important;"}
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`,m=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function x(n){const t=window.getComputedStyle(n),l=t.getPropertyValue("box-sizing"),r=Number.parseFloat(t.getPropertyValue("padding-bottom"))+Number.parseFloat(t.getPropertyValue("padding-top")),a=Number.parseFloat(t.getPropertyValue("border-bottom-width"))+Number.parseFloat(t.getPropertyValue("border-top-width"));return{contextStyle:m.map(p=>`${p}:${t.getPropertyValue(p)}`).join(";"),paddingSize:r,borderSize:a,boxSizing:l}}function c(n,t=1,l){e||(e=document.createElement("textarea"),document.body.appendChild(e));const{paddingSize:r,borderSize:a,boxSizing:d,contextStyle:p}=x(n);e.setAttribute("style",`${p};${h}`),e.value=n.value||n.placeholder||"";let i=e.scrollHeight;const g={};d==="border-box"?i=i+a:d==="content-box"&&(i=i-r),e.value="";const s=e.scrollHeight-r;if(u.isNumber(t)){let o=s*t;d==="border-box"&&(o=o+r+a),i=Math.max(o,i),g.minHeight=`${o}px`}if(u.isNumber(l)){let o=s*l;d==="border-box"&&(o=o+r+a),i=Math.min(o,i)}return g.height=`${i}px`,e.parentNode?.removeChild(e),e=void 0,g}exports.calcTextareaHeight=c;exports.default=c;
