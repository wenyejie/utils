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
/******/ 	return __webpack_require__(__webpack_require__.s = "./dateFormat.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dateFormat.ts":
/*!***********************!*\
  !*** ./dateFormat.ts ***!
  \***********************/
/*! exports provided: dateFormat, default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateFormat", function() { return dateFormat; });
/* harmony import */ var _toDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate */ "./toDate.ts");
/* harmony import */ var _isDate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isDate */ "./isDate.ts");


var padStart = function (number) {
    return ("" + number).padStart(2, '0');
};
/**
 * 把相关数据转换成
 * @param date 日期
 * @param format 格式
 */
var dateFormat = function (date, format) {
    if (format === void 0) { format = 'YYYY-MM-DD hh:mm:ss'; }
    date = Object(_toDate__WEBPACK_IMPORTED_MODULE_0__["default"])(date);
    if (!Object(_isDate__WEBPACK_IMPORTED_MODULE_1__["default"])(date)) {
        return '';
    }
    return format.replace(/YY(YY)?|MM?|DD?|hh?|mm?|ss?/g, function (str) {
        switch (str) {
            case 'YYYY':
                return date.getFullYear() + '';
            case 'YY':
                return (date.getFullYear() % 100) + '';
            case 'MM':
                return padStart(date.getMonth() + 1);
            case 'M':
                return date.getMonth() + 1 + '';
            case 'DD':
                return padStart(date.getDate());
            case 'D':
                return date.getDate() + '';
            case 'hh':
                return padStart(date.getHours());
            case 'h':
                return date.getHours() + '';
            case 'mm':
                return padStart(date.getMinutes());
            case 'm':
                return date.getMinutes() + '';
            case 'ss':
                return padStart(date.getSeconds());
            case 's':
                return date.getSeconds() + '';
            default:
                return '';
        }
    });
};
/* harmony default export */ __webpack_exports__["default"] = (dateFormat);


/***/ }),

/***/ "./isDate.ts":
/*!*******************!*\
  !*** ./isDate.ts ***!
  \*******************/
/*! exports provided: isDate, default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDate", function() { return isDate; });
/* harmony import */ var _toRawType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toRawType */ "./toRawType.ts");

/**
 * 判断一个数据是否为正确的date类型
 * @param obj
 */
var isDate = function (obj) {
    return Object(_toRawType__WEBPACK_IMPORTED_MODULE_0__["default"])(obj) === 'date' && obj.toString() !== 'Invalid Date';
};
/* harmony default export */ __webpack_exports__["default"] = (isDate);


/***/ }),

/***/ "./isNumber.ts":
/*!*********************!*\
  !*** ./isNumber.ts ***!
  \*********************/
/*! exports provided: isNumber, default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/**
 * 判断一个对象是否为数字类型
 * @param obj
 */
var isNumber = function (obj) { return typeof obj === 'number' && !Number.isNaN(obj); };
/* harmony default export */ __webpack_exports__["default"] = (isNumber);


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

/***/ "./toDate.ts":
/*!*******************!*\
  !*** ./toDate.ts ***!
  \*******************/
/*! exports provided: toDate, default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toDate", function() { return toDate; });
/* harmony import */ var _isDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isDate */ "./isDate.ts");
/* harmony import */ var _isNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isNumber */ "./isNumber.ts");
/* harmony import */ var _isString__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isString */ "./isString.ts");



/**
 * 把其它格式数据转换成日期
 * @param date
 */
var toDate = function (date) {
    if (Object(_isDate__WEBPACK_IMPORTED_MODULE_0__["default"])(date)) {
        return date;
    }
    if (!date) {
        return;
    }
    if (Object(_isString__WEBPACK_IMPORTED_MODULE_2__["default"])(date) && /^\d+$/.test(date)) {
        date = Number.parseInt(date);
    }
    if (Object(_isNumber__WEBPACK_IMPORTED_MODULE_1__["default"])(date)) {
        var dateStr = date + '';
        if (dateStr.length >= 8) {
            if (dateStr.length > 13) {
                date = Number.parseInt((date + '').substring(0, 13));
            }
            else {
                date = dateStr.padEnd(13, '0');
            }
            date = Object(_isString__WEBPACK_IMPORTED_MODULE_2__["default"])(date) ? Number.parseInt(date) : date;
            if (Number.isNaN(date)) {
                return;
            }
        }
        else {
            date = dateStr;
        }
    }
    // 兼容ios手机
    if (typeof date === 'string' && /^\d{4}.\d{1,2}.\d{1,2}\s+(\d{1,2}.)*\d{1,2}?$/.test(date)) {
        date = date.replace(/-/g, '/');
    }
    date = new Date(date);
    return Object(_isDate__WEBPACK_IMPORTED_MODULE_0__["default"])(date) ? date : undefined;
};
/* harmony default export */ __webpack_exports__["default"] = (toDate);


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
//# sourceMappingURL=dateFormat.dev.js.map