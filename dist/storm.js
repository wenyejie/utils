!function(n,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("storm",[],t):"object"==typeof exports?exports.storm=t():n.storm=t()}(window,(function(){return function(n){var t={};function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)e.d(r,o,function(t){return n[t]}.bind(null,o));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=0)}([function(n,t,e){"use strict";e.r(t),e.d(t,"VERSION",(function(){return Vt})),e.d(t,"ban",(function(){return c})),e.d(t,"bankCardFormat",(function(){return x})),e.d(t,"base642file",(function(){return D})),e.d(t,"cached",(function(){return S})),e.d(t,"CatchRequest",(function(){return on})),e.d(t,"checkIDNO",(function(){return un})),e.d(t,"checkTaxpayerIDNO",(function(){return an})),e.d(t,"clone",(function(){return hn})),e.d(t,"dateFormat",(function(){return Mn})),e.d(t,"debounce",(function(){return Nn})),e.d(t,"downloadBlob",(function(){return Tn})),e.d(t,"downloadFile",(function(){return jn})),e.d(t,"each",(function(){return Bn})),e.d(t,"emptyObject",(function(){return W})),e.d(t,"inBrowser",(function(){return O})),e.d(t,"useragent",(function(){return A})),e.d(t,"isAndroid",(function(){return E})),e.d(t,"isEdge",(function(){return M})),e.d(t,"isChrome",(function(){return N})),e.d(t,"isFirefox",(function(){return j})),e.d(t,"isIE",(function(){return F})),e.d(t,"isIE9",(function(){return P})),e.d(t,"isIOS",(function(){return $})),e.d(t,"isIPad",(function(){return C})),e.d(t,"isIPhone",(function(){return I})),e.d(t,"isMobile",(function(){return T})),e.d(t,"isPC",(function(){return Y})),e.d(t,"isPhantom",(function(){return k})),e.d(t,"isWeChat",(function(){return L})),e.d(t,"isWindows",(function(){return z})),e.d(t,"isMac",(function(){return B})),e.d(t,"isUbuntu",(function(){return R})),e.d(t,"isLinux",(function(){return U})),e.d(t,"file2base64",(function(){return Rn})),e.d(t,"find",(function(){return Wn})),e.d(t,"findProps",(function(){return _n})),e.d(t,"getDaysByMonth",(function(){return qn})),e.d(t,"getInfoByCardNO",(function(){return Kn})),e.d(t,"hasOwn",(function(){return Ln})),e.d(t,"hasOwnProperty",(function(){return Yn})),e.d(t,"file2img",(function(){return ot})),e.d(t,"createCanvas",(function(){return ut})),e.d(t,"calcDrawSize",(function(){return it})),e.d(t,"canvas2file",(function(){return ct})),e.d(t,"isArray",(function(){return dn})),e.d(t,"isBigint",(function(){return at})),e.d(t,"isBlob",(function(){return Pn})),e.d(t,"isBoolean",(function(){return ft})),e.d(t,"isComment",(function(){return st})),e.d(t,"isDate",(function(){return wn})),e.d(t,"isElement",(function(){return dt})),e.d(t,"isEmptyValue",(function(){return lt})),e.d(t,"isEvenNumber",(function(){return ht})),e.d(t,"isFunction",(function(){return Z})),e.d(t,"isInteger",(function(){return Vn})),e.d(t,"isNaturalNumber",(function(){return pt})),e.d(t,"isNumber",(function(){return Dn})),e.d(t,"isObject",(function(){return o})),e.d(t,"isOddNumber",(function(){return Xn})),e.d(t,"isPlainDate",(function(){return mt})),e.d(t,"isPlainNumber",(function(){return gt})),e.d(t,"isPlainObject",(function(){return vt})),e.d(t,"isPlainString",(function(){return bt})),e.d(t,"isPositiveInteger",(function(){return yt})),e.d(t,"isPrimitive",(function(){return fn})),e.d(t,"isPromise",(function(){return wt})),e.d(t,"isRegExp",(function(){return xt})),e.d(t,"isSameDay",(function(){return Dt})),e.d(t,"isSameHost",(function(){return St})),e.d(t,"isSameMonth",(function(){return Ot})),e.d(t,"isSameYear",(function(){return At})),e.d(t,"isString",(function(){return a})),e.d(t,"isSupportWebp",(function(){return Mt})),e.d(t,"isSymbol",(function(){return Nt})),e.d(t,"isText",(function(){return jt})),e.d(t,"load",(function(){return nt})),e.d(t,"mobilePhoneFormat",(function(){return Ft})),e.d(t,"money2cn",(function(){return Pt})),e.d(t,"moneyFormat",(function(){return $t})),e.d(t,"noop",(function(){return Ct})),e.d(t,"nullProtoObject",(function(){return Qn})),e.d(t,"objectLength",(function(){return It})),e.d(t,"objectToString",(function(){return pn})),e.d(t,"once",(function(){return Et})),e.d(t,"pick",(function(){return Tt})),e.d(t,"prefix",(function(){return Yt})),e.d(t,"randomInteger",(function(){return kt})),e.d(t,"randomNumber",(function(){return Lt})),e.d(t,"rMobilePhone",(function(){return s})),e.d(t,"rTelephone",(function(){return d})),e.d(t,"rPhone",(function(){return l})),e.d(t,"rIDCardNO",(function(){return h})),e.d(t,"rBankCardNO",(function(){return p})),e.d(t,"rChineseName",(function(){return m})),e.d(t,"rEmail",(function(){return g})),e.d(t,"rUrl",(function(){return v})),e.d(t,"rEmoji",(function(){return b})),e.d(t,"rPostcode",(function(){return y})),e.d(t,"rAmount",(function(){return w})),e.d(t,"removeVal",(function(){return zt})),e.d(t,"remove",(function(){return Bt})),e.d(t,"script",(function(){return Rt})),e.d(t,"StorageName",(function(){return r})),e.d(t,"localCustomStorage",(function(){return V})),e.d(t,"sessionCustomStorage",(function(){return J})),e.d(t,"session",(function(){return G})),e.d(t,"local",(function(){return Q})),e.d(t,"suffix",(function(){return Cn})),e.d(t,"swap",(function(){return Ut})),e.d(t,"throttle",(function(){return Wt})),e.d(t,"toDate",(function(){return On})),e.d(t,"toRawType",(function(){return bn})),e.d(t,"toTypeString",(function(){return gn})),e.d(t,"unique",(function(){return Ht})),e.d(t,"url2http",(function(){return _t})),e.d(t,"url2https",(function(){return qt}));var r,o=function(n){return null!==n&&"object"==typeof n},u=o,i=function(){return(i=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++)for(var o in t=arguments[e])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n}).apply(this,arguments)},c=function(n){for(var t=[],e=1;e<arguments.length;e++)t[e-1]=arguments[e];var r={};return u(n)?(r=i({},n),t.forEach((function(n){delete r[n]})),r):r},a=function(n){return"string"==typeof n&&n.trim().length>0},f=a,s=/^1\d{10}$/,d=/^(\d{3,4}-)?\d{7,8}$/,l=/(^1\d{10}$)|(^(0\d{2,3}-?)?\d{7,8}(-\d{3,})?$)/,h=/^(^[1-9]\d{7}((0\d)|(1[0-2]))(([012]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([012]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/,p=/^\d{16,19}$/,m=/^[\u4E00-\u9FA5]{2,}(·[\u4E00-\u9FA5]{2,})*$/,g=/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/,v=/^https?:\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?&?[a-zA-Z0-9_-](\?)?)*)*$/i,b=/[\uD83C\uD83D\uD83E][\uDC00-\uDFFF][\u200D|\uFE0F]|[\uD83C|\uD83D\uD83E][\uDC00-\uDFFF]|[0-9*#]\uFE0F\u20E3|[0-9#]\u20E3|[\u203C-\u3299]\uFE0F\u200D|[\u203C-\u3299]\uFE0F|[\u2122-\u2B55]|\u303D|[A9E]\u3030|uA9|uAE|\u3030/gi,y=/^[1-9]\d{5}(?!\d)$/,w=/((^[1-9]\d*)|^0)(\.\d{1,2})?$/,x=function(n){return f(n)&&p.test(n)?(n=n.trim()).replace(/(\d{4}(?=\d))/g,"$1 "):""},D=function(n,t){for(var e=n.split(","),r=e[0].match(/:(.*?);/)[1],o=window.atob(e[1]),u=o.length,i=new Uint8Array(u);u--;)i[u]=o.charCodeAt(u);return new File([i],t+"."+r.substring(6),{type:r})},S=function(n){var t={};return function(){var e=Array.prototype.join.call(arguments,",");return e in t?t[e]:t[e]=n.apply(this,arguments)}},O=function(){return"undefined"!=typeof window},A=function(){return O()?window.navigator.userAgent.toLocaleLowerCase():""},E=function(){return A().includes("android")},M=function(){return A().includes("edge")},N=function(){return/chrome\/\d+/.test(A())&&!M()},j=function(){return/firefox\/(\d+)/.test(A())},F=function(){return/msie|trident/.test(A())},P=function(){return A().includes("msie 9.0")},$=function(){return/iphone|ipad|ipod|ios/.test(A())},C=function(){return A().includes("ipad")},I=function(){return A().includes("iphone")},T=function(){return A().includes("mobile")},Y=function(){return!T()},k=function(){return/phantomjs/.test(A())},L=function(){return A().includes("micromessenger")},z=function(){return A().includes("windows")},B=function(){return A().includes("macintosh")},R=function(){return A().includes("ubuntu")},U=function(){return A().includes("linux")&&!R()&&!E()},W=Object.freeze({}),H=W;!function(n){n.local="local",n.session="session"}(r||(r={}));var _=function(n){return(JSON.parse(n)||H).v},q=function(){function n(n){this.storage=O()?window[n+"Storage"]:H}return n.prototype.get=function(n){var t;try{t=_(this.storage.getItem(n))}catch(n){throw new Error(n)}return t},n.prototype.set=function(n,t){try{this.storage.setItem(n,JSON.stringify({v:t}))}catch(n){throw new Error(n)}},n.prototype.remove=function(n){this.storage.removeItem(n)},n.prototype.clear=function(){this.storage.clear()},n.prototype.key=function(n){return _(this.storage.key(n))},n.prototype.length=function(){return this.storage.length},n}(),V=new q(r.local),J=new q(r.session),X=function(n){return function(t,e){if(t)switch(e){case void 0:return n.get(t);case null:n.remove(t);break;default:n.set(t,e)}}},G=X(J),Q=X(V),Z=function(n){return"function"==typeof n},K=Z,nn=function(n){return"s-catch-request-"+n},tn=function(n){return n===r.local?Q:G},en=function(n){if(void 0===n&&(n=r.local),O()){var t=window[n+"Storage"];for(var e in t)e.indexOf("s-catch-request-")>=0&&t.removeItem(e)}},rn={storageMode:r.local,immediate:!1,timeout:0},on=function(){function n(n){this.loading=0,this.timestamp=0,this.options=Object.assign(rn,n),"none"!==this.options.storageMode&&(this.storage=tn(this.options.storageMode)),this.options.immediate&&this.get()}return n.prototype.get=function(n){var t=this;if(void 0===n&&(n=!1),!n){if(2===this.loading&&!this.isTimeout())return Promise.resolve(this.data);if(1===this.loading)return this.promise;if("none"!==this.options.storageMode){var e=this.storage(this.getStorageName());if(void 0!==e&&(this.timestamp=e.timestamp,!this.isTimeout()))return this.data=e.value,this.loading=2,Promise.resolve(this.data)}}return this.loading=1,this.promise=this.options.method().then((function(n){return K(t.options.success)&&t.options.success(n),t.data=n,t.timestamp=Date.now(),"none"!==t.options.storageMode&&t.storage(t.getStorageName(),{value:t.data,timestamp:t.timestamp}),n})),this.promise},n.prototype.isTimeout=function(){return this.options.timeout>0&&Date.now()-this.timestamp>this.options.timeout},n.prototype.getStorageName=function(){return nn(this.options.storageName)},n.prototype.remove=function(){this.storage&&this.storage(this.getStorageName(),null)},n.create=function(t){return new n(t)},n.remove=function(n,t){void 0===t&&(t=r.local),tn(t)(nn(n),null)},n.removeAll=function(n){void 0!==n&&n!==r.local||en(r.local),void 0!==n&&n!==r.session||en(r.session)},n}(),un=function(n){var t=(n+"").toLocaleUpperCase();if(!h.test(t))return!1;for(var e=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],r=t.substring(0,17).split(""),o=r.length,u=0,i=0;i<o;i++)u+=r[i]*e[i];return["1","0","X","9","8","7","6","5","4","3","2"][u%11]===t[17]},cn=un,an=function(n){for(var t=[/^[\da-z]{10,15}$/i,/^\d{6}[\da-z]{10,12}$/i,/^[a-z]\d{6}[\da-z]{9,11}$/i,/^[a-z]{2}\d{6}[\da-z]{8,10}$/i,/^\d{14}[\dx][\da-z]{4,5}$/i,/^\d{17}[\dx][\da-z]{1,2}$/i,/^[a-z]\d{14}[\dx][\da-z]{3,4}$/i,/^[a-z]\d{17}[\dx][\da-z]{0,1}$/i,/^[\d]{6}[\da-z]{13,14}$/i],e=t.length,r=0;r<e;r++)if(t[r].test(n))return!0;return!1},fn=function(n){var t=typeof n;return"string"===t||"number"===t||"boolean"===t||"bigint"===t||"symbol"===t||null==n},sn=fn,dn=Array.isArray,ln=dn,hn=function(n,t,e){if(void 0===t&&(t=!0),void 0===e&&(e=new WeakMap),sn(n))return n;if(e.get(n))return e.get(n);var r=ln(n)?[]:{};e.set(n,r);for(var o,u=Object.keys(n),i=0,c=u.length;i<c;i++)r[o=u[i]]=t?hn(n[o],t,e):n[o];return r},pn=Object.prototype.toString,mn=pn,gn=function(n){return mn.call(n).toLocaleLowerCase()},vn=gn,bn=function(n){return vn(n).slice(8,-1).toLocaleLowerCase()},yn=bn,wn=function(n){return"date"===yn(n)&&"Invalid Date"!==n.toString()},xn=wn,Dn=function(n){return"number"==typeof n&&!Number.isNaN(n)},Sn=Dn,On=function(n){if(xn(n))return n;if(n){if(f(n)&&/^\d+$/.test(n)&&(n=Number.parseInt(n)),Sn(n)){var t=n+"";if(t.length>=8){if(n=t.length>13?Number.parseInt((n+"").substring(0,13)):t.padEnd(13,"0"),n=f(n)?Number.parseInt(n):n,Number.isNaN(n))return}else n=t}return"string"==typeof n&&/^\d{4}.\d{1,2}.\d{1,2}\s+(\d{1,2}.)*\d{1,2}?$/.test(n)&&(n=n.replace(/-/g,"/")),n=new Date(n),xn(n)?n:void 0}},An=On,En=function(n){return(""+n).padStart(2,"0")},Mn=function(n,t){return void 0===t&&(t="YYYY-MM-DD hh:mm:ss"),n=An(n),xn(n)?t.replace(/YY(YY)?|MM?|DD?|hh?|mm?|ss?/g,(function(t){switch(t){case"YYYY":return n.getFullYear()+"";case"YY":return n.getFullYear()%100+"";case"MM":return En(n.getMonth()+1);case"M":return n.getMonth()+1+"";case"DD":return En(n.getDate());case"D":return n.getDate()+"";case"hh":return En(n.getHours());case"h":return n.getHours()+"";case"mm":return En(n.getMinutes());case"m":return n.getMinutes()+"";case"ss":return En(n.getSeconds());case"s":return n.getSeconds()+"";default:return""}})):""},Nn=function(n,t,e){var r;return void 0===t&&(t=500),void 0===e&&(e=!1),function(){for(var o=this,u=[],i=0;i<arguments.length;i++)u[i]=arguments[i];clearTimeout(r),e&&(n.apply(this,u),e=!1),r=setTimeout((function(){n.apply(o,u)}),t)}},jn=function(n,t){if(void 0===t&&(t=""),!f(n))throw new Error("参数错误");var e=document.createElement("a");e.style.display="none",e.href=n,e.setAttribute("download",t),e.download||e.setAttribute("target","_blank"),document.body.appendChild(e),e.click(),document.body.removeChild(e)},Fn=jn,Pn=function(n){return"blob"===yn(n)},$n=Pn,Cn=function(n){return a(n)?-1===(n=n.trim()).search(/\.(\w+)+$/)?"":RegExp.$1:""},In=Cn,Tn=function(n,t){if(!$n(n))throw new Error("参数错误: blob不是Blob类型");if(In(t)||(t=t+"."+n.type.replace(/image\//,""),console.warn("参数错误: filename没有后缀名")),window.navigator.msSaveBlob)window.navigator.msSaveBlob(n,t);else{var e=window.URL.createObjectURL(n);Fn(e,t),window.URL.revokeObjectURL(e)}},Yn=Object.prototype.hasOwnProperty,kn=Yn,Ln=function(n,t){return null!=n&&kn.call(n,t)},zn=Ln,Bn=function(n,t){if(ln(n)||u(n))if(ln(n)){for(var e=0;e<n.length;e++)if(!1===t.call(n[e],n[e],e,n))return}else for(var r in n)if(zn(n,r)&&!1===t.call(n[r],n[r],r,n))return},Rn=function(n){return new Promise((function(t,e){var r=new FileReader;r.onload=function(){t(r.result)},r.onerror=e,r.readAsDataURL(n)}))},Un=Rn,Wn=function(n,t,e){var r,o=u(t)?t:((r={})[t]=e,r);return ln(n)&&u(o)?n.find((function(n){if(!u(n))return!1;for(var t in o)if(zn(o,t)&&n[t]!==o[t])return!1;return!0})):null},Hn=Wn,_n=function(n,t,e,r){void 0===e&&(e="value"),void 0===r&&(r="label");var o=Hn(n,e,t);return u(o)?o[r]:""},qn=function(n){return n=An(n),xn(n)?new Date(n.getFullYear(),n.getMonth()+1,0).getDate():(console.warn("参数错误",n),0)},Vn=Number.isInteger,Jn=Vn,Xn=function(n){return Jn(n)&&n%2==1},Gn=Xn,Qn=function(){return Object.create(null)},Zn=Qn,Kn=function(n){return cn(n)?{province:n.substring(0,2),city:n.substring(2,4),area:n.substring(4,6),address:n.substring(0,6),year:n.substring(6,10),month:n.substring(10,12),day:n.substring(12,14),date:n.substring(6,14),sex:Gn(+n.substring(16,17))?"女":"男"}:(console.warn("参数cardNumber: '"+n+"' 身份证号码错误"),Zn)},nt=function(n,t,e){return e=Object.assign({before:null,mode:"src",attrs:null},e),new Promise((function(r,o){var i=document.createElement(n),c=document.body;i[e.mode]=t;var a=e.attrs;if(u(a))for(var f in a)zn(a,f)&&i.setAttribute(f,a[f]);i.onload=function(){r(i),c.removeChild(i)},i.onerror=function(){o(i),c.removeChild(i)},K(e.before)&&e.before(),c.appendChild(i)}))},tt=nt,et=function(n,t,e,r){return new(e||(e=Promise))((function(o,u){function i(n){try{a(r.next(n))}catch(n){u(n)}}function c(n){try{a(r.throw(n))}catch(n){u(n)}}function a(n){var t;n.done?o(n.value):(t=n.value,t instanceof e?t:new e((function(n){n(t)}))).then(i,c)}a((r=r.apply(n,t||[])).next())}))},rt=function(n,t){var e,r,o,u,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function c(u){return function(c){return function(u){if(e)throw new TypeError("Generator is already executing.");for(;i;)try{if(e=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,r=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){i=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){i.label=u[1];break}if(6===u[0]&&i.label<o[1]){i.label=o[1],o=u;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(u);break}o[2]&&i.ops.pop(),i.trys.pop();continue}u=t.call(n,i)}catch(n){u=[6,n],r=0}finally{e=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,c])}}},ot=function(n){return et(void 0,void 0,void 0,(function(){var t;return rt(this,(function(e){switch(e.label){case 0:return[4,Un(n)];case 1:return t=e.sent(),[4,(r=t,tt("img",r))];case 2:return[2,e.sent()]}var r}))}))},ut=function(n,t){return new Promise((function(n){var e=document.createElement("canvas"),r=e.getContext("2d");r.fillStyle=t.fillStyle,r.fillRect(0,0,e.width,e.height),n({context:r,$canvas:e})}))},it=function(n,t){var e=n.naturalWidth/n.naturalHeight,r=0,o=0,u=n.naturalWidth,i=n.naturalHeight;return e>=1?o=(r=t.maxWidth>0&&n.naturalWidth>t.maxWidth?t.maxWidth:n.naturalWidth)/e:r=(o=t.maxHeight>0&&n.naturalHeight>t.maxHeight?t.maxHeight:n.naturalHeight)*e,{dw:r,dh:o,dx:0,dy:0,sx:0,sy:0,sw:u,sh:i}},ct=function(n,t,e){return new Promise((function(r){n.toBlob((function(n){r(new File([n],t.name,{type:t.type}))}),t.type,e.quality)}))},at=function(n){return"bigint"==typeof n},ft=function(n){return!0===n||!1===n},st=function(n){return!!n&&8===n.nodeType},dt=function(n){return!!n&&1===n.nodeType},lt=function(n){return null==n||""===n||Number.isNaN(n)||ln(n)&&0===n.length},ht=function(n){return Jn(n)&&n%2==0},pt=function(n){return Jn(n)&&n>=0},mt=function(n){return"date"===yn(n)},gt=function(n){return"number"==typeof n},vt=function(n){return"object"===yn(n)},bt=function(n){return"string"==typeof n},yt=function(n){return Jn(n)&&n>0},wt=function(n){return u(n)&&K(n)&&K(n.catch)},xt=function(n){return"regexp"===yn(n)},Dt=function(n,t){return void 0===t&&(t=new Date),n=An(n),t=An(t),!(!xn(n)||!xn(t))&&n.toLocaleDateString()===t.toLocaleDateString()},St=function(n,t){if(void 0===t&&(t=window.location.href),!f(n))return!1;var e=document.createElement("a");e.href=n;var r=document.createElement("a");return r.href=t,e.host===r.host},Ot=function(n,t){return void 0===t&&(t=new Date),n=An(n),t=An(t),!(!xn(n)||!xn(t))&&n.toLocaleDateString().slice(0,7)===t.toLocaleDateString().slice(0,7)},At=function(n,t){return void 0===t&&(t=new Date),n=An(n),t=An(t),!(!xn(n)||!xn(t))&&n.getFullYear()===t.getFullYear()},Et=function(n){var t;return function(){return t||(t=n.apply(this,arguments))}},Mt=Et((function(){return new Promise((function(n,t){var e=new Image;e.onload=function(){e.width>0&&e.height>0?n():t(),e.remove()},e.onerror=function(){t(),e.remove()},e.src="data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="}))})),Nt=function(n){return"symbol"==typeof n},jt=function(n){return!!n&&3===n.nodeType},Ft=function(n){return f(n)&&s.test(n)?n.replace(/(\d{3})\d*(\d{4})/,"$1****$2"):""},Pt=function(n){var t=["角","分"],e=["零","壹","贰","叁","肆","伍","陆","柒","捌","玖"],r=[["元","万","亿"],["","拾","佰","仟"]];n=Math.abs(n);for(var o="",u=0;u<t.length;u++)o+=(e[Math.floor(10*n*Math.pow(10,u))%10]+t[u]).replace(/零./,"");o=o||"整",n=Math.floor(n);for(u=0;u<r[0].length&&n>0;u++){for(var i="",c=0;c<r[1].length&&n>0;c++)i=e[n%10]+r[1][c]+i,n=Math.floor(n/10);o=i.replace(/(零.)*零$/,"").replace(/^$/,"零")+r[0][u]+o}return o.replace(/(零.)*零元/,"元").replace(/(零.)+/g,"零").replace(/^整$/,"零元整")},$t=function(n,t){if(t=Object.assign({decimal:2,symbol:"",default:"",split:",",length:3},t),n=Number.parseFloat(n+""),!Sn(n))return t.default;var e=n.toFixed(t.decimal).split(".");return t.symbol+e[0].replace(new RegExp("\\B(?=(\\d{"+t.length+"})+(?!\\d))","g"),t.split)+"."+e[1]},Ct=function(){},It=function(n){return u(n)?Object.keys(n).length:0},Tt=function(n){for(var t=[],e=1;e<arguments.length;e++)t[e-1]=arguments[e];var r={};return u(n)&&t.forEach((function(t){r[t]=n[t]})),r},Yt=function(n){return a(n)?-1===(n=n.trim()).search(/^(\w+)+(?=\.)/)?"":RegExp.$1:""},kt=function(n,t){void 0===t&&(t=0);var e=Math.max(n,t),r=Math.min(n,t);return Math.floor(Math.random()*(e-r+1))+r},Lt=function(n,t){void 0===t&&(t=0);var e=Math.max(n,t),r=Math.min(n,t);return Math.random()*(e-r)+r},zt=function(n,t){if(!ln(n)||n.length<=0)return n;var e=n.indexOf(t);return e>=0&&n.splice(e,1),n},Bt=function(n){for(var t=[],e=1;e<arguments.length;e++)t[e-1]=arguments[e];if(!ln(n)||0===t.length)return n;for(var r=0;r<t.length;r++)zt(n,t[r]);return n},Rt=function(n,t){return tt("script",n,t)},Ut=function(n,t,e){if(!zn(n,t)||!zn(n,e))return n;var r=n[t];return n[t]=n[e],n[e]=r,n},Wt=function(n,t,e){var r;return void 0===t&&(t=500),void 0===e&&(e=!0),function(){for(var o=this,u=[],i=0;i<arguments.length;i++)u[i]=arguments[i];if(e)return n.apply(this,u),void(e=!1);r||(r=window.setTimeout((function(){clearTimeout(r),n.apply(o,u)}),t))}},Ht=function(n){return Array.from(new Set(n))},_t=function(n){return f(n)?/^https/.test(n)?n.replace(/^https/,"http"):n:""},qt=function(n){return f(n)?/^https/.test(n)?n:n.replace(/^http/,"https"):""},Vt="1.1.11"}])}));
//# sourceMappingURL=storm.js.map