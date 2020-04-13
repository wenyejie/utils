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
/******/ 	return __webpack_require__(__webpack_require__.s = "./isPlainObject.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./isPlainObject.ts":
/*!**************************!*\
  !*** ./isPlainObject.ts ***!
  \**************************/
/*! exports provided: isPlainObject, default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPlainObject", function() { return isPlainObject; });
/* harmony import */ var _toRawType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toRawType */ "./toRawType.ts");

/**
 * 判断是否为对象
 * @param obj
 */
var isPlainObject = function (obj) { return Object(_toRawType__WEBPACK_IMPORTED_MODULE_0__["default"])(obj) === 'object'; };
/* harmony default export */ __webpack_exports__["default"] = (isPlainObject);


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
//# sourceMappingURL=isPlainObject.dev.js.map