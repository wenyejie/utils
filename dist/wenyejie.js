!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define("wenyejie",[],n):"object"==typeof exports?exports.wenyejie=n():t.wenyejie=n()}(window,(function(){return function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=7)}([function(t,n){function e(n){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=e=function(t){return typeof t}:t.exports=e=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(n)}t.exports=e},function(t,n){t.exports=function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}},function(t,n){function e(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}},function(t,n,e){t.exports=e(6)},function(t,n){t.exports=function(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}},function(t,n){function e(t,n,e,r,o,i,u){try{var c=t[i](u),a=c.value}catch(t){return void e(t)}c.done?n(a):Promise.resolve(a).then(r,o)}t.exports=function(t){return function(){var n=this,r=arguments;return new Promise((function(o,i){var u=t.apply(n,r);function c(t){e(u,o,i,c,a,"next",t)}function a(t){e(u,o,i,c,a,"throw",t)}c(void 0)}))}}},function(t,n,e){var r=function(t){"use strict";var n=Object.prototype,e=n.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",u=r.toStringTag||"@@toStringTag";function c(t,n,e,r){var o=n&&n.prototype instanceof f?n:f,i=Object.create(o.prototype),u=new x(r||[]);return i._invoke=function(t,n,e){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return j()}for(e.method=o,e.arg=i;;){var u=e.delegate;if(u){var c=b(u,e);if(c){if(c===s)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===r)throw r="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r="executing";var f=a(t,n,e);if("normal"===f.type){if(r=e.done?"completed":"suspendedYield",f.arg===s)continue;return{value:f.arg,done:e.done}}"throw"===f.type&&(r="completed",e.method="throw",e.arg=f.arg)}}}(t,e,u),i}function a(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var s={};function f(){}function l(){}function d(){}var h={};h[o]=function(){return this};var p=Object.getPrototypeOf,g=p&&p(p(S([])));g&&g!==n&&e.call(g,o)&&(h=g);var m=d.prototype=f.prototype=Object.create(h);function v(t){["next","throw","return"].forEach((function(n){t[n]=function(t){return this._invoke(n,t)}}))}function y(t,n){var r;this._invoke=function(o,i){function u(){return new n((function(r,u){!function r(o,i,u,c){var s=a(t[o],t,i);if("throw"!==s.type){var f=s.arg,l=f.value;return l&&"object"==typeof l&&e.call(l,"__await")?n.resolve(l.__await).then((function(t){r("next",t,u,c)}),(function(t){r("throw",t,u,c)})):n.resolve(l).then((function(t){f.value=t,u(f)}),(function(t){return r("throw",t,u,c)}))}c(s.arg)}(o,i,r,u)}))}return r=r?r.then(u,u):u()}}function b(t,n){var e=t.iterator[n.method];if(void 0===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=void 0,b(t,n),"throw"===n.method))return s;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=a(e,t.iterator,n.arg);if("throw"===r.type)return n.method="throw",n.arg=r.arg,n.delegate=null,s;var o=r.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,s):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,s)}function w(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function O(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function S(t){if(t){var n=t[o];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function n(){for(;++r<t.length;)if(e.call(t,r))return n.value=t[r],n.done=!1,n;return n.value=void 0,n.done=!0,n};return i.next=i}}return{next:j}}function j(){return{value:void 0,done:!0}}return l.prototype=m.constructor=d,d.constructor=l,d[u]=l.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===l||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},v(y.prototype),y.prototype[i]=function(){return this},t.AsyncIterator=y,t.async=function(n,e,r,o,i){void 0===i&&(i=Promise);var u=new y(c(n,e,r,o),i);return t.isGeneratorFunction(e)?u:u.next().then((function(t){return t.done?t.value:u.next()}))},v(m),m[u]="Generator",m[o]=function(){return this},m.toString=function(){return"[object Generator]"},t.keys=function(t){var n=[];for(var e in t)n.push(e);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=S,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var n in this)"t"===n.charAt(0)&&e.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(e,r){return u.type="throw",u.arg=t,n.next=e,r&&(n.method="next",n.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],u=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=e.call(i,"catchLoc"),a=e.call(i,"finallyLoc");if(c&&a){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!a)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,n){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var u=i?i.completion:{};return u.type=t,u.arg=n,i?(this.method="next",this.next=i.finallyLoc,s):this.complete(u)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),s},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),O(e),s}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;O(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:S(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=void 0),s}},t}(t.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}},function(t,n,e){"use strict";e.r(n),e.d(n,"VERSION",(function(){return _e})),e.d(n,"ban",(function(){return l})),e.d(n,"bankCardFormat",(function(){return E})),e.d(n,"base642file",(function(){return k})),e.d(n,"cached",(function(){return D})),e.d(n,"camelize",(function(){return N})),e.d(n,"capitalize",(function(){return A})),e.d(n,"CatchRequest",(function(){return mt})),e.d(n,"checkIDNO",(function(){return vt})),e.d(n,"checkTaxpayerIDNO",(function(){return bt})),e.d(n,"clone",(function(){return jt})),e.d(n,"countdown",(function(){return Dt})),e.d(n,"getCSS",(function(){return $t})),e.d(n,"setCSS",(function(){return It})),e.d(n,"supportCSS",(function(){return Tt})),e.d(n,"dateFormat",(function(){return Zt})),e.d(n,"debounce",(function(){return Qt})),e.d(n,"downloadBlob",(function(){return un})),e.d(n,"downloadFile",(function(){return Kt})),e.d(n,"each",(function(){return ln})),e.d(n,"emptyObject",(function(){return nt})),e.d(n,"inBrowser",(function(){return I})),e.d(n,"useragent",(function(){return T})),e.d(n,"isAndroid",(function(){return _})),e.d(n,"isEdge",(function(){return Y})),e.d(n,"isChrome",(function(){return z})),e.d(n,"isFirefox",(function(){return B})),e.d(n,"isIE",(function(){return R})),e.d(n,"isIE9",(function(){return U})),e.d(n,"isIOS",(function(){return H})),e.d(n,"isIPad",(function(){return W})),e.d(n,"isIPhone",(function(){return G})),e.d(n,"isMobile",(function(){return J})),e.d(n,"isPC",(function(){return V})),e.d(n,"isPhantom",(function(){return q})),e.d(n,"isWeChat",(function(){return X})),e.d(n,"isWindows",(function(){return Z})),e.d(n,"isMac",(function(){return Q})),e.d(n,"isUbuntu",(function(){return K})),e.d(n,"isLinux",(function(){return tt})),e.d(n,"add",(function(){return yn})),e.d(n,"subtract",(function(){return bn})),e.d(n,"multiply",(function(){return wn})),e.d(n,"divide",(function(){return On})),e.d(n,"file2base64",(function(){return xn})),e.d(n,"find",(function(){return jn})),e.d(n,"findProps",(function(){return kn})),e.d(n,"getDaysByMonth",(function(){return Dn})),e.d(n,"getInfoByCardNO",(function(){return Fn})),e.d(n,"hasOwn",(function(){return sn})),e.d(n,"hasOwnProperty",(function(){return cn})),e.d(n,"hyphenate",(function(){return Nt})),e.d(n,"file2img",(function(){return Yn})),e.d(n,"createCanvas",(function(){return zn})),e.d(n,"calcDrawSize",(function(){return Bn})),e.d(n,"canvas2file",(function(){return Rn})),e.d(n,"isArray",(function(){return xt})),e.d(n,"isBigint",(function(){return Un})),e.d(n,"isBlob",(function(){return nn})),e.d(n,"isBoolean",(function(){return Hn})),e.d(n,"isComment",(function(){return Wn})),e.d(n,"isDate",(function(){return Ht})),e.d(n,"isDefined",(function(){return Gn})),e.d(n,"isElement",(function(){return At})),e.d(n,"isEmptyValue",(function(){return Jn})),e.d(n,"isEvenNumber",(function(){return Vn})),e.d(n,"isFunction",(function(){return ft})),e.d(n,"isInteger",(function(){return dn})),e.d(n,"isJson",(function(){return Ct})),e.d(n,"isJsonString",(function(){return qn})),e.d(n,"isNaturalNumber",(function(){return Xn})),e.d(n,"isNumber",(function(){return Gt})),e.d(n,"isObject",(function(){return c})),e.d(n,"isOddNumber",(function(){return Pn})),e.d(n,"isPlainDate",(function(){return Zn})),e.d(n,"isPlainNumber",(function(){return Qn})),e.d(n,"isPlainObject",(function(){return Kn})),e.d(n,"isPlainString",(function(){return te})),e.d(n,"isPositiveInteger",(function(){return ne})),e.d(n,"isPrimitive",(function(){return wt})),e.d(n,"isPromise",(function(){return ee})),e.d(n,"isRegExp",(function(){return re})),e.d(n,"isSameDay",(function(){return oe})),e.d(n,"isSameHost",(function(){return ie})),e.d(n,"isSameMonth",(function(){return ue})),e.d(n,"isSameYear",(function(){return ce})),e.d(n,"isString",(function(){return d})),e.d(n,"isSupportWebp",(function(){return se})),e.d(n,"isSymbol",(function(){return fe})),e.d(n,"isText",(function(){return le})),e.d(n,"isUndefined",(function(){return de})),e.d(n,"load",(function(){return Tn})),e.d(n,"mobilePhoneFormat",(function(){return he})),e.d(n,"money2cn",(function(){return Oe})),e.d(n,"moneyFormat",(function(){return xe})),e.d(n,"noop",(function(){return Se})),e.d(n,"nullProtoObject",(function(){return Ln})),e.d(n,"objectLength",(function(){return je})),e.d(n,"objectToString",(function(){return _t})),e.d(n,"once",(function(){return ae})),e.d(n,"phoneNumFormat",(function(){return Ee})),e.d(n,"pick",(function(){return ke})),e.d(n,"prefix",(function(){return De})),e.d(n,"randomInteger",(function(){return Pe})),e.d(n,"randomNumber",(function(){return Ne})),e.d(n,"rMobilePhone",(function(){return p})),e.d(n,"rTelephone",(function(){return g})),e.d(n,"rPhone",(function(){return m})),e.d(n,"rIDCardNO",(function(){return v})),e.d(n,"rBankCardNO",(function(){return y})),e.d(n,"rChineseName",(function(){return b})),e.d(n,"rEmail",(function(){return w})),e.d(n,"rUrl",(function(){return O})),e.d(n,"rEmoji",(function(){return x})),e.d(n,"rPostcode",(function(){return S})),e.d(n,"rAmount",(function(){return j})),e.d(n,"removeVal",(function(){return Le})),e.d(n,"remove",(function(){return Ae})),e.d(n,"script",(function(){return Fe})),e.d(n,"localCustomStorage",(function(){return it})),e.d(n,"sessionCustomStorage",(function(){return ut})),e.d(n,"session",(function(){return at})),e.d(n,"local",(function(){return st})),e.d(n,"suffix",(function(){return rn})),e.d(n,"swap",(function(){return Ce})),e.d(n,"throttle",(function(){return Me})),e.d(n,"toDate",(function(){return Vt})),e.d(n,"toRawType",(function(){return Rt})),e.d(n,"toTypeString",(function(){return zt})),e.d(n,"unique",(function(){return $e})),e.d(n,"url2http",(function(){return Ie})),e.d(n,"url2https",(function(){return Te}));var r=e(4),o=e.n(r),i=e(0),u=e.n(i),c=function(t){return null!==t&&"object"===u()(t)},a=c;function s(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?s(Object(e),!0).forEach((function(n){o()(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):s(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var l=function(t){var n={};if(!a(t))return n;n=f({},t);for(var e=arguments.length,r=new Array(e>1?e-1:0),o=1;o<e;o++)r[o-1]=arguments[o];return r.forEach((function(t){delete n[t]})),n},d=function(t){return"string"==typeof t&&t.trim().length>0},h=d,p=/^1\d{10}$/,g=/^(\d{3,4}-)?\d{7,8}$/,m=/(^1\d{10}$)|(^(0\d{2,3}-?)?\d{7,8}(-\d{3,})?$)/,v=/^(^[1-9]\d{7}((0\d)|(1[0-2]))(([012]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([012]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/,y=/^\d{16,19}$/,b=/^[\u4E00-\u9FA5]{2,}(·[\u4E00-\u9FA5]{2,})*$/,w=/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/,O=/^https?:\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?&?[a-zA-Z0-9_-](\?)?)*)*$/i,x=/[\uD83C\uD83D\uD83E][\uDC00-\uDFFF][\u200D|\uFE0F]|[\uD83C|\uD83D\uD83E][\uDC00-\uDFFF]|[0-9*#]\uFE0F\u20E3|[0-9#]\u20E3|[\u203C-\u3299]\uFE0F\u200D|[\u203C-\u3299]\uFE0F|[\u2122-\u2B55]|\u303D|[A9E]\u3030|uA9|uAE|\u3030/gi,S=/^[1-9]\d{5}(?!\d)$/,j=/((^[1-9]\d*)|^0)(\.\d{1,2})?$/,E=function(t){return h(t)&&y.test(t)?(t=t.trim()).replace(/(\d{4}(?=\d))/g,"$1 "):""},k=function(t,n){for(var e=t.split(","),r=e[0].match(/:(.*?);/)[1],o=window.atob(e[1]),i=o.length,u=new Uint8Array(i);i--;)u[i]=o.charCodeAt(i);return new File([u],n+"."+r.substring(6),{type:r})},D=function(t){var n={};return function(){var e=Array.prototype.join.call(arguments,",");return e in n?n[e]:n[e]=t.apply(this,arguments)}},P=/-(\w)/g,N=function(t){return t.replace(P,(function(t,n){return n?n.toUpperCase():""}))},L=N,A=function(t){return t.charAt(0).toUpperCase()+t.slice(1)},F=e(1),C=e.n(F),M=e(2),$=e.n(M),I=function(){return"undefined"!=typeof window},T=function(){return I()?window.navigator.userAgent.toLocaleLowerCase():""},_=function(){return T().includes("android")},Y=function(){return T().includes("edge")},z=function(){return/chrome\/\d+/.test(T())&&!Y()},B=function(){return/firefox\/(\d+)/.test(T())},R=function(){return/msie|trident/.test(T())},U=function(){return T().includes("msie 9.0")},H=function(){return/iphone|ipad|ipod|ios/.test(T())},W=function(){return T().includes("ipad")},G=function(){return T().includes("iphone")},J=function(){return T().includes("mobile")},V=function(){return!J()},q=function(){return/phantomjs/.test(T())},X=function(){return T().includes("micromessenger")},Z=function(){return T().includes("windows")},Q=function(){return T().includes("macintosh")},K=function(){return T().includes("ubuntu")},tt=function(){return T().includes("linux")&&!K()&&!_()},nt=Object.freeze({}),et=nt,rt=function(t){return(JSON.parse(t)||et).v},ot=function(){function t(n){C()(this,t),this.storage=I()?window["".concat(n,"Storage")]:et}return $()(t,[{key:"get",value:function(t){var n;try{n=rt(this.storage.getItem(t))}catch(t){throw new Error(t)}return n}},{key:"set",value:function(t,n){try{this.storage.setItem(t,JSON.stringify({v:n}))}catch(t){throw new Error(t)}}},{key:"remove",value:function(t){this.storage.removeItem(t)}},{key:"clear",value:function(){this.storage.clear()}},{key:"key",value:function(t){return rt(this.storage.key(t))}},{key:"length",value:function(){return this.storage.length}}]),t}(),it=new ot("local"),ut=new ot("session"),ct=function(t){return function(n,e){if(n)switch(e){case void 0:return t.get(n);case null:t.remove(n);break;default:t.set(n,e)}}},at=ct(ut),st=ct(it),ft=function(t){return"function"==typeof t},lt=ft,dt=function(t){return"s-catch-request-"+t},ht=function(t){return"local"===t?st:at},pt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"local";if(I()){var n=window[t+"Storage"];for(var e in n)e.indexOf("s-catch-request-")>=0&&n.removeItem(e)}},gt={storageMode:"local",immediate:!1,timeout:0},mt=function(){function t(n){C()(this,t),this.loading=0,this.timestamp=0,this.options=Object.assign(gt,n),"none"!==this.options.storageMode&&(this.storage=ht(this.options.storageMode)),this.options.immediate&&this.get()}return $()(t,[{key:"get",value:function(){var t=this,n=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(!n){if(2===this.loading&&!this.isTimeout())return Promise.resolve(this.data);if(1===this.loading)return this.promise;if("none"!==this.options.storageMode){var e=this.storage(this.getStorageName());if(void 0!==e&&(this.timestamp=e.timestamp,!this.isTimeout()))return this.data=e.value,this.loading=2,Promise.resolve(this.data)}}return this.loading=1,this.promise=this.options.method().then((function(n){return lt(t.options.success)&&t.options.success(n),t.data=n,t.timestamp=Date.now(),"none"!==t.options.storageMode&&t.storage(t.getStorageName(),{value:t.data,timestamp:t.timestamp}),n})),this.promise}},{key:"isTimeout",value:function(){return this.options.timeout>0&&Date.now()-this.timestamp>this.options.timeout}},{key:"getStorageName",value:function(){return dt(this.options.storageName)}},{key:"remove",value:function(){this.storage&&this.storage(this.getStorageName(),null)}}],[{key:"create",value:function(n){return new t(n)}},{key:"remove",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:StorageName.local;ht(n)(dt(t),null)}},{key:"removeAll",value:function(t){void 0!==t&&"local"!==t||pt("local"),void 0!==t&&"session"!==t||pt("session")}}]),t}(),vt=function(t){var n=(t+"").toLocaleUpperCase();if(!v.test(n))return!1;for(var e=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],r=n.substring(0,17).split(""),o=r.length,i=0,u=0;u<o;u++)i+=r[u]*e[u];return["1","0","X","9","8","7","6","5","4","3","2"][i%11]===n[17]},yt=vt,bt=function(t){for(var n=[/^[\da-z]{10,15}$/i,/^\d{6}[\da-z]{10,12}$/i,/^[a-z]\d{6}[\da-z]{9,11}$/i,/^[a-z]{2}\d{6}[\da-z]{8,10}$/i,/^\d{14}[\dx][\da-z]{4,5}$/i,/^\d{17}[\dx][\da-z]{1,2}$/i,/^[a-z]\d{14}[\dx][\da-z]{3,4}$/i,/^[a-z]\d{17}[\dx][\da-z]{0,1}$/i,/^[\d]{6}[\da-z]{13,14}$/i],e=n.length,r=0;r<e;r++)if(n[r].test(t))return!0;return!1},wt=function(t){var n=u()(t);return"string"===n||"number"===n||"boolean"===n||"bigint"===n||"symbol"===n||null==t},Ot=wt,xt=Array.isArray,St=xt,jt=function t(n){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:new WeakMap;if(Ot(n))return n;if(r.get(n))return r.get(n);var o=St(n)?[]:{};r.set(n,o);for(var i,u=Object.keys(n),c=0,a=u.length;c<a;c++)o[i=u[c]]=e?t(n[i],e,r):n[i];return o};function Et(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}var kt={timeout:1e3,autostart:!0},Dt=function(){function t(n,e){C()(this,t),this.second=n,this.count=0,lt(e)&&(e={change:e}),this.options=Object.assign(function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?Et(Object(e),!0).forEach((function(n){o()(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):Et(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}({},kt),e),this.options.autostart&&this.start()}return $()(t,[{key:"callback",value:function(t){lt(this.options[t])&&this.options[t](this.count,this)}},{key:"loop",value:function(){var t=this;this.callback("change"),this.timer=setInterval((function(){t.count--,t.callback("change"),0===t.count&&(clearInterval(t.timer),t.callback("end"))}),this.options.timeout)}},{key:"restart",value:function(){this.count=this.second,this.callback("restart"),this.loop()}},{key:"start",value:function(){this.count<=0&&(this.count=this.second),this.callback("start"),this.loop()}},{key:"stop",value:function(){clearInterval(this.timer),this.callback("stop")}}],[{key:"create",value:function(n,e){return new t(n,e)}}]),t}().create,Pt=/\B([A-Z])/g,Nt=function(t){return t.replace(Pt,"-$1").toLowerCase()},Lt=Nt,At=function(t){return!!t&&1===t.nodeType},Ft=At,Ct=function(t){try{return JSON.stringify(t)&&!0}catch(t){return!1}},Mt=Ct,$t=function(t,n,e){if(!Ft(t))throw new Error("请传入正确的参数elt: HTMLElement");return h(n)?document.defaultView.getComputedStyle(t,e)[L(n)]:document.defaultView.getComputedStyle(t,e)},It=function(t,n,e){if(!Ft(t))throw new Error("请传入正确的参数elt: HTMLElement");var r={};for(var o in h(n)?r[L(n)]=e:Mt(n)&&(r=n),r)t.style[o]=r[o]},Tt=function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"div";if(window.CSS&&window.CSS.supports)return window.CSS.supports(Lt(t),n);var r=document.createElement(e);return t in r.style&&(r.style[L(t)]=n,r.style[L(t)]===n)},_t=Object.prototype.toString,Yt=_t,zt=function(t){return Yt.call(t).toLocaleLowerCase()},Bt=zt,Rt=function(t){return Bt(t).slice(8,-1).toLocaleLowerCase()},Ut=Rt,Ht=function(t){return"date"===Ut(t)&&"Invalid Date"!==t.toString()},Wt=Ht,Gt=function(t){return"number"==typeof t&&!Number.isNaN(t)},Jt=Gt,Vt=function(t){if(Wt(t))return t;if(t){if(h(t)&&/^\d+$/.test(t)&&(t=Number.parseInt(t)),Jt(t)){var n=t+"";if(n.length>=8){if(t=n.length>13?Number.parseInt((t+"").substring(0,13)):n.padEnd(13,"0"),t=h(t)?Number.parseInt(t):t,Number.isNaN(t))return}else t=n}return"string"==typeof t&&/^\d{4}.\d{1,2}.\d{1,2}\s+(\d{1,2}.)*\d{1,2}?$/.test(t)&&(t=t.replace(/-/g,"/")),t=new Date(t),Wt(t)?t:void 0}},qt=Vt,Xt=function(t){return"".concat(t).padStart(2,"0")},Zt=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DD hh:mm:ss";return t=qt(t),Wt(t)?n.replace(/YY(YY)?|MM?|DD?|hh?|mm?|ss?/g,(function(n){switch(n){case"YYYY":return t.getFullYear()+"";case"YY":return t.getFullYear()%100+"";case"MM":return Xt(t.getMonth()+1);case"M":return t.getMonth()+1+"";case"DD":return Xt(t.getDate());case"D":return t.getDate()+"";case"hh":return Xt(t.getHours());case"h":return t.getHours()+"";case"mm":return Xt(t.getMinutes());case"m":return t.getMinutes()+"";case"ss":return Xt(t.getSeconds());case"s":return t.getSeconds()+"";default:return""}})):""},Qt=function(t){var n,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function(){for(var o=this,i=arguments.length,u=new Array(i),c=0;c<i;c++)u[c]=arguments[c];clearTimeout(n),r&&(t.apply(this,u),r=!1),n=setTimeout((function(){t.apply(o,u)}),e)}},Kt=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(!h(t))throw new Error("参数错误");var e=document.createElement("a");e.style.display="none",e.href=t,e.setAttribute("download",n),e.download||e.setAttribute("target","_blank"),document.body.appendChild(e),e.click(),document.body.removeChild(e)},tn=Kt,nn=function(t){return"blob"===Ut(t)},en=nn,rn=function(t){return d(t)?-1===(t=t.trim()).search(/\.(\w+)+$/)?"":RegExp.$1:""},on=rn,un=function(t,n){if(!en(t))throw new Error("参数错误: blob不是Blob类型");if(on(n)||(n=n+"."+t.type.replace(/image\//,""),console.warn("参数错误: filename没有后缀名")),window.navigator.msSaveBlob)window.navigator.msSaveBlob(t,n);else{var e=window.URL.createObjectURL(t);tn(e,n),window.URL.revokeObjectURL(e)}},cn=Object.prototype.hasOwnProperty,an=cn,sn=function(t,n){return null!=t&&an.call(t,n)},fn=sn,ln=function(t,n){if(St(t)||a(t))if(St(t)){for(var e=0;e<t.length;e++)if(!1===n.call(t[e],t[e],e,t))return}else for(var r in t)if(fn(t,r)&&!1===n.call(t[r],t[r],r,t))return},dn=Number.isInteger,hn=dn,pn=/^\d+\.?/,gn=function(t){return hn(t)?0:t.toString().replace(pn,"").length},mn=function(t,n,e){if(0===n)return t;hn(t)&&(t+="."),"*"===e?t+="0".padEnd(n,"0"):t="0".padEnd(n,"0")+t;var r=t.indexOf(".");return t=t.replace(".",""),t="*"===e?t.slice(0,r+n)+"."+t.slice(r+n):t.slice(0,r-n)+"."+t.slice(r-n),Number.parseFloat(t)},vn=function(t,n,e){if(!Jt(Number.parseFloat(n))||!Jt(Number.parseFloat(t)))throw console.error("传入参数有误, 请重新确认!",t,n);var r,o,i=(r=t,o=n,Math.max(gn(r),gn(o)));t=mn(t,i,"*"),n=mn(n,i,"*");var u=0;switch(e){case"+":u=mn(t+n,i,"/");break;case"-":u=mn(t-n,i,"/");break;case"*":u=mn(t*n,2*i,"/");break;case"/":u=t/n;break;default:throw console.error("运算符传入有误, 请重新确认!")}return u},yn=function(t,n){return vn(t,n,"+")},bn=function(t,n){return vn(t,n,"-")},wn=function(t,n){return vn(t,n,"*")},On=function(t,n){return vn(t,n,"/")},xn=function(t){return new Promise((function(n,e){var r=new FileReader;r.onload=function(){n(r.result)},r.onerror=e,r.readAsDataURL(t)}))},Sn=xn,jn=function(t,n,e){var r=a(n)?n:{key:e};return St(t)&&a(r)?t.find((function(t){if(!a(t))return!1;for(var n in r)if(fn(r,n)&&t[n]!==r[n])return!1;return!0})):null},En=jn,kn=function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"value",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"label",o=En(t,e,n);return a(o)?o[r]:""},Dn=function(t){return t=qt(t),Wt(t)?new Date(t.getFullYear(),t.getMonth()+1,0).getDate():(console.warn("参数错误",t),0)},Pn=function(t){return hn(t)&&t%2==1},Nn=Pn,Ln=function(){return Object.create(null)},An=Ln,Fn=function(t){return yt(t)?{province:t.substring(0,2),city:t.substring(2,4),area:t.substring(4,6),address:t.substring(0,6),year:t.substring(6,10),month:t.substring(10,12),day:t.substring(12,14),date:t.substring(6,14),sex:Nn(+t.substring(16,17))?"女":"男"}:(console.warn("参数cardNumber: '".concat(t,"' 身份证号码错误")),An)},Cn=e(3),Mn=e.n(Cn),$n=e(5),In=e.n($n),Tn=function(t,n,e){return e=Object.assign({before:null,mode:"src",attrs:null},e),new Promise((function(r,o){var i=document.createElement(t),u=document.body;i[e.mode]=n;var c=e.attrs;if(a(c))for(var s in c)fn(c,s)&&i.setAttribute(s,c[s]);i.onload=function(){r(i),u.removeChild(i)},i.onerror=function(){o(i),u.removeChild(i)},lt(e.before)&&e.before(i),u.appendChild(i)}))},_n=Tn,Yn=function(){var t=In()(Mn.a.mark((function t(n){var e;return Mn.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Sn(n);case 2:return e=t.sent,t.next=5,_n("img",e);case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),zn=function(t,n){return new Promise((function(t){var e=document.createElement("canvas"),r=e.getContext("2d");r.fillStyle=n.fillStyle,r.fillRect(0,0,e.width,e.height),t({context:r,$canvas:e})}))},Bn=function(t,n){var e=t.naturalWidth/t.naturalHeight,r=0,o=0,i=t.naturalWidth,u=t.naturalHeight;return e>=1?o=(r=n.maxWidth>0&&t.naturalWidth>n.maxWidth?n.maxWidth:t.naturalWidth)/e:r=(o=n.maxHeight>0&&t.naturalHeight>n.maxHeight?n.maxHeight:t.naturalHeight)*e,{dw:r,dh:o,dx:0,dy:0,sx:0,sy:0,sw:i,sh:u}},Rn=function(t,n,e){return new Promise((function(r){t.toBlob((function(t){r(new File([t],n.name,{type:n.type}))}),n.type,e.quality)}))},Un=function(t){return"bigint"==typeof t},Hn=function(t){return!0===t||!1===t},Wn=function(t){return!!t&&8===t.nodeType},Gn=function(t){return null!=t},Jn=function(t){return null==t||""===t||Number.isNaN(t)||St(t)&&0===t.length},Vn=function(t){return hn(t)&&t%2==0},qn=function(t){try{return JSON.parse(t)&&!0}catch(t){return!1}},Xn=function(t){return hn(t)&&t>=0},Zn=function(t){return"date"===Ut(t)},Qn=function(t){return"number"==typeof t},Kn=function(t){return"object"===Ut(t)},te=function(t){return"string"==typeof t},ne=function(t){return hn(t)&&t>0},ee=function(t){return a(t)&&lt(t)&&lt(t.catch)},re=function(t){return"regexp"===Ut(t)},oe=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Date;return t=qt(t),n=qt(n),!(!Wt(t)||!Wt(n))&&t.toLocaleDateString()===n.toLocaleDateString()},ie=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.location.href;if(!h(t))return!1;var e=document.createElement("a");e.href=t;var r=document.createElement("a");return r.href=n,e.host===r.host},ue=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Date;return t=qt(t),n=qt(n),!(!Wt(t)||!Wt(n))&&t.toLocaleDateString().slice(0,7)===n.toLocaleDateString().slice(0,7)},ce=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Date;return t=qt(t),n=qt(n),!(!Wt(t)||!Wt(n))&&t.getFullYear()===n.getFullYear()},ae=function(t){var n;return function(){return n||(n=t.apply(this,arguments))}},se=ae((function(){return new Promise((function(t,n){var e=new Image;e.onload=function(){e.width>0&&e.height>0?t():n(),e.remove()},e.onerror=function(){n(),e.remove()},e.src="data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="}))})),fe=function(t){return"symbol"===u()(t)},le=function(t){return!!t&&3===t.nodeType},de=function(t){return null==t},he=function(t){return h(t)&&p.test(t)?t.replace(/(\d{3})\d*(\d{4})/,"$1****$2"):""},pe=["角","分"],ge=["零","壹","贰","叁","肆","伍","陆","柒","捌","玖"],me=["","拾","佰","仟"],ve=["","万","亿"],ye=/零[拾佰仟]/g,be=/零+([万亿])/g,we=/零{2,}/,Oe=function(t){for(var n=t.toString().replace(/\.\d+$/,"").split(""),e=t.toString().replace(/^\d+\.?/,"").split(""),r=n.length-1,o=0;r>=0;r--,o++)"0"===n[r]&&r>0&&r<n.length-1?n[r]="零":n[r]=ge[n[r]]+me[o%4],n[r]+=o%4==0?ve[o/4]:"";for(var i=0;i<e.length;i++)"0"!==e[i]?e[i]=ge[e[i]]+pe[i]:e[i]="";var u=n.join("").replace(ye,"").replace(be,"$1").replace(we,"零");u.length>1&&(u=u.replace(/零$/,"")),u.length>=1&&(u+="元");var c=e.join("");return""===c?c="整":u=u.replace(/^零元$/,""),u+c},xe=function(t,n){if(n=Object.assign({decimal:2,symbol:"",default:"",split:",",length:3},n),t=Number.parseFloat(t+""),!Jt(t))return n.default;var e=t.toFixed(n.decimal).split(".");return n.symbol+e[0].replace(new RegExp("\\B(?=(\\d{"+n.length+"})+(?!\\d))","g"),n.split)+"."+e[1]},Se=function(){},je=function(t){return a(t)?Object.keys(t).length:0},Ee=function(t){return h(t)?t.replace(/(\d{3})\d*(\d{4})/,"$1****$2"):""},ke=function(t){var n={};if(a(t)){for(var e=arguments.length,r=new Array(e>1?e-1:0),o=1;o<e;o++)r[o-1]=arguments[o];r.forEach((function(e){n[e]=t[e]}))}return n},De=function(t){return d(t)?-1===(t=t.trim()).search(/^(\w+)+(?=\.)/)?"":RegExp.$1:""},Pe=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=Math.max(t,n),r=Math.min(t,n);return Math.floor(Math.random()*(e-r+1))+r},Ne=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=Math.max(t,n),r=Math.min(t,n);return Math.random()*(e-r)+r},Le=function(t,n){if(!St(t)||t.length<=0)return t;var e=t.indexOf(n);return e>=0&&t.splice(e,1),t},Ae=function(t){if(!St(t)||0==(arguments.length<=1?0:arguments.length-1))return t;for(var n=0;n<(arguments.length<=1?0:arguments.length-1);n++)Le(t,n+1<1||arguments.length<=n+1?void 0:arguments[n+1]);return t},Fe=function(t,n){return _n("script",t,n)},Ce=function(t,n,e){if(!fn(t,n)||!fn(t,e))return t;var r=t[n];return t[n]=t[e],t[e]=r,t},Me=function(t){var n,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500,r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return function(){for(var o=this,i=arguments.length,u=new Array(i),c=0;c<i;c++)u[c]=arguments[c];if(r)return t.apply(this,u),void(r=!1);n||(n=window.setTimeout((function(){clearTimeout(n),t.apply(o,u)}),e))}},$e=function(t){return Array.from(new Set(t))},Ie=function(t){return h(t)?/^https/.test(t)?t.replace(/^https/,"http"):t:""},Te=function(t){return h(t)?/^https/.test(t)?t:t.replace(/^http/,"https"):""},_e="1.15.0"}])}));
//# sourceMappingURL=wenyejie.js.map