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
/******/ 	return __webpack_require__(__webpack_require__.s = "./findProps.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./find.ts":
/*!*****************!*\
  !*** ./find.ts ***!
  \*****************/
/*! exports provided: find, default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "find", function() { return find; });
/* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray */ "./isArray.ts");
/* harmony import */ var _isObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isObject */ "./isObject.ts");
/* harmony import */ var _hasOwn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hasOwn */ "./hasOwn.ts");



/**
 * 根据键值对从数组中查找子项
 * @param data
 * @param key
 * @param value
 */
var find = function (data, key, value) {
    var _a;
    var props = Object(_isObject__WEBPACK_IMPORTED_MODULE_1__["default"])(key)
        ? key
        : (_a = {}, _a[key] = value, _a);
    if (!Object(_isArray__WEBPACK_IMPORTED_MODULE_0__["default"])(data) || !Object(_isObject__WEBPACK_IMPORTED_MODULE_1__["default"])(props)) {
        return null;
    }
    return data.find(function (item) {
        if (!Object(_isObject__WEBPACK_IMPORTED_MODULE_1__["default"])(item)) {
            return false;
        }
        for (var key_1 in props) {
            if (Object(_hasOwn__WEBPACK_IMPORTED_MODULE_2__["default"])(props, key_1) && item[key_1] !== props[key_1]) {
                return false;
            }
        }
        return true;
    });
};
/* harmony default export */ __webpack_exports__["default"] = (find);


/***/ }),

/***/ "./findProps.ts":
/*!**********************!*\
  !*** ./findProps.ts ***!
  \**********************/
/*! exports provided: findProps, default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findProps", function() { return findProps; });
/* harmony import */ var _find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./find */ "./find.ts");
/* harmony import */ var _isObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isObject */ "./isObject.ts");


/**
 * 通过属性查找对应属性值
 * @param data 查找的数据
 * @param propValue 查找的属性值
 * @param propKey 查找的属性
 * @param returnKey 返回的属性
 */
var findProps = function (data, propValue, propKey, returnKey) {
    if (propKey === void 0) { propKey = 'value'; }
    if (returnKey === void 0) { returnKey = 'label'; }
    var item = Object(_find__WEBPACK_IMPORTED_MODULE_0__["default"])(data, propKey, propValue);
    return Object(_isObject__WEBPACK_IMPORTED_MODULE_1__["default"])(item) ? item[returnKey] : '';
};
/* harmony default export */ __webpack_exports__["default"] = (findProps);


/***/ }),

/***/ "./hasOwn.ts":
/*!*******************!*\
  !*** ./hasOwn.ts ***!
  \*******************/
/*! exports provided: hasOwn, default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasOwn", function() { return hasOwn; });
/* harmony import */ var _hasOwnProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hasOwnProperty */ "./hasOwnProperty.ts");

/**
 * 判断key是否是对象自己的属性
 * @param object
 * @param key
 */
var hasOwn = function (object, key) {
    if (object === null || object === undefined) {
        return false;
    }
    return _hasOwnProperty__WEBPACK_IMPORTED_MODULE_0__["default"].call(object, key);
};
/* harmony default export */ __webpack_exports__["default"] = (hasOwn);


/***/ }),

/***/ "./hasOwnProperty.ts":
/*!***************************!*\
  !*** ./hasOwnProperty.ts ***!
  \***************************/
/*! exports provided: hasOwnProperty, default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasOwnProperty", function() { return hasOwnProperty; });
/**
 * 指向Object原型中hasOwnProperty方法
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
/* harmony default export */ __webpack_exports__["default"] = (hasOwnProperty);


/***/ }),

/***/ "./isArray.ts":
/*!********************!*\
  !*** ./isArray.ts ***!
  \********************/
/*! exports provided: isArray, default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/**
 * 判断一个对象是否为数组
 */
var isArray = Array.isArray;
/* harmony default export */ __webpack_exports__["default"] = (isArray);


/***/ }),

/***/ "./isObject.ts":
/*!*********************!*\
  !*** ./isObject.ts ***!
  \*********************/
/*! exports provided: isObject, default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/**
 * 判断是否为对象
 * @param obj
 */
var isObject = function (obj) { return obj !== null && typeof obj === 'object'; };
/* harmony default export */ __webpack_exports__["default"] = (isObject);


/***/ })

/******/ });
});
//# sourceMappingURL=findProps.dev.js.map