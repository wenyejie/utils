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
/******/ 	return __webpack_require__(__webpack_require__.s = "./downloadBlob.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./downloadBlob.ts":
/*!*************************!*\
  !*** ./downloadBlob.ts ***!
  \*************************/
/*! exports provided: downloadBlob, default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "downloadBlob", function() { return downloadBlob; });
/* harmony import */ var _downloadFile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./downloadFile */ "./downloadFile.ts");
/* harmony import */ var _isBlob__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isBlob */ "./isBlob.ts");
/* harmony import */ var _suffix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./suffix */ "./suffix.ts");



/**
 * 下载blob文件
 * 主要用于下载非同源的文件, 采用XMLHttpRequest blob下载方式下载下来或者下载canvas中的图像
 * @param blob
 * @param filename
 */
var downloadBlob = function (blob, filename) {
    if (!Object(_isBlob__WEBPACK_IMPORTED_MODULE_1__["default"])(blob)) {
        throw new Error('参数错误: blob不是Blob类型');
    }
    if (!Object(_suffix__WEBPACK_IMPORTED_MODULE_2__["default"])(filename)) {
        filename = filename + '.' + blob.type.replace(/image\//, '');
        console.warn('参数错误: filename没有后缀名');
    }
    if (window.navigator.msSaveBlob) {
        window.navigator.msSaveBlob(blob, filename);
        return;
    }
    var url = window.URL.createObjectURL(blob);
    Object(_downloadFile__WEBPACK_IMPORTED_MODULE_0__["default"])(url, filename);
    window.URL.revokeObjectURL(url);
};
/* harmony default export */ __webpack_exports__["default"] = (downloadBlob);


/***/ }),

/***/ "./downloadFile.ts":
/*!*************************!*\
  !*** ./downloadFile.ts ***!
  \*************************/
/*! exports provided: downloadFile, default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "downloadFile", function() { return downloadFile; });
/* harmony import */ var _isString__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isString */ "./isString.ts");

/**
 * 通过url下载
 * PS: 只能下载同源的链接, 如果不是同源的文件请使用downloadBlob方法
 * @param url
 * @param filename
 */
var downloadFile = function (url, filename) {
    if (!Object(_isString__WEBPACK_IMPORTED_MODULE_0__["default"])(url)) {
        throw new Error('参数错误');
    }
    var $download = document.createElement('a');
    $download.style.display = 'none';
    $download.href = url;
    $download.setAttribute('download', filename);
    // 当不允许下载或者下载失败时, 在新页面打开, 而不是当前页面
    $download.setAttribute('target', '_blank');
    document.body.appendChild($download);
    $download.click();
    document.body.removeChild($download);
};
/* harmony default export */ __webpack_exports__["default"] = (downloadFile);


/***/ }),

/***/ "./isBlob.ts":
/*!*******************!*\
  !*** ./isBlob.ts ***!
  \*******************/
/*! exports provided: isBlob, default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBlob", function() { return isBlob; });
/* harmony import */ var _toRawType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toRawType */ "./toRawType.ts");

var isBlob = function (obj) {
    return Object(_toRawType__WEBPACK_IMPORTED_MODULE_0__["default"])(obj) === 'blob';
};
/* harmony default export */ __webpack_exports__["default"] = (isBlob);


/***/ }),

/***/ "./isString.ts":
/*!*********************!*\
  !*** ./isString.ts ***!
  \*********************/
/*! exports provided: isString, default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/**
 * 判断一个数据是否为string类型
 * @param obj
 */
var isString = function (obj) { return typeof obj === 'string' && obj.trim().length > 0; };
/* harmony default export */ __webpack_exports__["default"] = (isString);


/***/ }),

/***/ "./objectToString.ts":
/*!***************************!*\
  !*** ./objectToString.ts ***!
  \***************************/
/*! exports provided: objectToString, default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectToString", function() { return objectToString; });
/**
 * 指向Object原型中的toString方法
 */
var objectToString = Object.prototype.toString;
/* harmony default export */ __webpack_exports__["default"] = (objectToString);


/***/ }),

/***/ "./suffix.ts":
/*!*******************!*\
  !*** ./suffix.ts ***!
  \*******************/
/*! exports provided: suffix, default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "suffix", function() { return suffix; });
/* harmony import */ var _isString__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isString */ "./isString.ts");

/**
 * 获取字符串中的后缀
 * @param string 字符串
 */
var suffix = function (string) {
    if (!Object(_isString__WEBPACK_IMPORTED_MODULE_0__["isString"])(string)) {
        return '';
    }
    string = string.trim();
    var index = string.search(/(?<=\.)(\w+)+$/);
    if (index === -1) {
        return '';
    }
    return string.substring(index, string.length);
};
/* harmony default export */ __webpack_exports__["default"] = (suffix);


/***/ }),

/***/ "./toRawType.ts":
/*!**********************!*\
  !*** ./toRawType.ts ***!
  \**********************/
/*! exports provided: toRawType, default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toRawType", function() { return toRawType; });
/* harmony import */ var _toTypeString__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toTypeString */ "./toTypeString.ts");

// enum dataTypes {
//   date = 'date',
//   string = 'string',
//   number = 'number',
//   symbol = 'symbol',
// }
/**
 * 返回数据的类型
 * @param obj 返回类型的对象
 */
var toRawType = function (obj) {
    return Object(_toTypeString__WEBPACK_IMPORTED_MODULE_0__["default"])(obj)
        .slice(8, -1)
        .toLocaleLowerCase();
};
/* harmony default export */ __webpack_exports__["default"] = (toRawType);


/***/ }),

/***/ "./toTypeString.ts":
/*!*************************!*\
  !*** ./toTypeString.ts ***!
  \*************************/
/*! exports provided: toTypeString, default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toTypeString", function() { return toTypeString; });
/* harmony import */ var _objectToString__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectToString */ "./objectToString.ts");

/**
 * 返回对象的类型
 * @param obj
 */
var toTypeString = function (obj) {
    return _objectToString__WEBPACK_IMPORTED_MODULE_0__["default"].call(obj).toLocaleLowerCase();
};
/* harmony default export */ __webpack_exports__["default"] = (toTypeString);


/***/ })

/******/ });
});
//# sourceMappingURL=downloadBlob.dev.js.map