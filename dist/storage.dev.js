(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("storm", [], factory);
	else if(typeof exports === 'object')
		exports["storm"] = factory();
	else
		root["storm"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./storage.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./emptyObject.ts":
/*!************************!*\
  !*** ./emptyObject.ts ***!
  \************************/
/*! exports provided: emptyObject, default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyObject", function() { return emptyObject; });
/**
 * 被冻结的空对象
 */
var emptyObject = Object.freeze({});
/* harmony default export */ __webpack_exports__["default"] = (emptyObject);


/***/ }),

/***/ "./env.ts":
/*!****************!*\
  !*** ./env.ts ***!
  \****************/
/*! exports provided: inBrowser, useragent, isAndroid, isEdge, isChrome, isFirefox, isIE, isIE9, isIOS, isIPad, isIPhone, isMobile, isPC, isPhantom, isWeChat, isWindows, isMac, isUbuntu, isLinux */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inBrowser", function() { return inBrowser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useragent", function() { return useragent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAndroid", function() { return isAndroid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEdge", function() { return isEdge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isChrome", function() { return isChrome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFirefox", function() { return isFirefox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIE", function() { return isIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIE9", function() { return isIE9; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIOS", function() { return isIOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIPad", function() { return isIPad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIPhone", function() { return isIPhone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return isMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPC", function() { return isPC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPhantom", function() { return isPhantom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWeChat", function() { return isWeChat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWindows", function() { return isWindows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMac", function() { return isMac; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUbuntu", function() { return isUbuntu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLinux", function() { return isLinux; });
var inBrowser = function () { return typeof window !== 'undefined'; };
var useragent = function () { return (inBrowser() ? window.navigator.userAgent.toLocaleLowerCase() : ''); };
var isAndroid = function () { return useragent().includes('android'); };
var isEdge = function () { return useragent().includes('edge'); };
var isChrome = function () { return /chrome\/\d+/.test(useragent()) && !isEdge(); };
var isFirefox = function () { return /firefox\/(\d+)/.test(useragent()); };
var isIE = function () { return /msie|trident/.test(useragent()); };
var isIE9 = function () { return useragent().includes('msie 9.0'); };
var isIOS = function () { return /iphone|ipad|ipod|ios/.test(useragent()); };
// Mozilla/5.0 (iPad; CPU OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/79.0.3945.73 Mobile/15E148 Safari/604.1
var isIPad = function () { return useragent().includes('ipad'); };
// Mozilla/5.0 (iPhone; CPU iPhone OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/80.0.3987.95 Mobile/15E148 Safari/604.1
var isIPhone = function () { return useragent().includes('iphone'); };
var isMobile = function () { return useragent().includes('mobile'); };
var isPC = function () { return !isMobile(); };
var isPhantom = function () { return /phantomjs/.test(useragent()); };
var isWeChat = function () { return useragent().includes('micromessenger'); };
var isWindows = function () { return useragent().includes('windows'); };
// Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.3538.77 Safari/537.36
var isMac = function () { return useragent().includes('macintosh'); };
// Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/535.11 (KHTML, like Gecko) Ubuntu/14.04.6 Chrome/81.0.3990.0 Safari/537.36
var isUbuntu = function () { return useragent().includes('ubuntu'); };
// Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36
var isLinux = function () { return useragent().includes('linux') && !isUbuntu() && !isAndroid(); };


/***/ }),

/***/ "./storage.ts":
/*!********************!*\
  !*** ./storage.ts ***!
  \********************/
/*! exports provided: parse, localCustomStorage, sessionCustomStorage, session, local */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localCustomStorage", function() { return localCustomStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sessionCustomStorage", function() { return sessionCustomStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "session", function() { return session; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "local", function() { return local; });
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./env */ "./env.ts");
/* harmony import */ var _emptyObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emptyObject */ "./emptyObject.ts");


var StorageName;
(function (StorageName) {
    StorageName["local"] = "local";
    StorageName["session"] = "session";
})(StorageName || (StorageName = {}));
/**
 * 解析
 * @param data
 */
var parse = function (data) {
    return (JSON.parse(data) || _emptyObject__WEBPACK_IMPORTED_MODULE_1__["default"]).v;
};
/**
 * 自定义存储类
 */
var CustomStorage = /** @class */ (function () {
    function CustomStorage(name) {
        // @ts-ignore
        this.storage = Object(_env__WEBPACK_IMPORTED_MODULE_0__["inBrowser"])() ? window[name + "Storage"] : _emptyObject__WEBPACK_IMPORTED_MODULE_1__["default"];
    }
    /**
     * 获取存储内容
     * @param key
     */
    CustomStorage.prototype.get = function (key) {
        var result;
        try {
            result = parse(this.storage.getItem(key));
        }
        catch (e) {
            throw new Error(e);
        }
        return result;
    };
    /**
     * 保存键值到存储空间
     * @param key
     * @param value
     */
    CustomStorage.prototype.set = function (key, value) {
        try {
            this.storage.setItem(key, JSON.stringify({ v: value }));
        }
        catch (e) {
            throw new Error(e);
        }
    };
    /**
     * 移除存储值
     * @param key
     */
    CustomStorage.prototype.remove = function (key) {
        this.storage.removeItem(key);
    };
    /**
     * 清空所有存储
     */
    CustomStorage.prototype.clear = function () {
        this.storage.clear();
    };
    /**
     * 返回第index个存储的内容, index从0开始
     * @param index
     */
    CustomStorage.prototype.key = function (index) {
        return parse(this.storage.key(index));
    };
    /**
     * 返回存储内容长度
     */
    CustomStorage.prototype.length = function () {
        return this.storage.length;
    };
    return CustomStorage;
}());
var localCustomStorage = new CustomStorage(StorageName.local);
var sessionCustomStorage = new CustomStorage(StorageName.session);
var storage = function (customStorage) {
    return function (name, value) {
        if (!name) {
            return;
        }
        switch (value) {
            case undefined:
                return customStorage.get(name);
            case null:
                customStorage.remove(name);
                break;
            default:
                customStorage.set(name, value);
                break;
        }
    };
};
/**
 * 实例化封装sessionStorage
 */
var session = storage(sessionCustomStorage);
/**
 * 实例化封装localStorage
 */
var local = storage(localCustomStorage);


/***/ })

/******/ });
});
//# sourceMappingURL=storage.dev.js.map