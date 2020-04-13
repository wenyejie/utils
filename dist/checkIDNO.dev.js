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
/******/ 	return __webpack_require__(__webpack_require__.s = "./checkIDNO.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./checkIDNO.ts":
/*!**********************!*\
  !*** ./checkIDNO.ts ***!
  \**********************/
/*! exports provided: checkIDNO, default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkIDNO", function() { return checkIDNO; });
/* harmony import */ var _regexp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regexp */ "./regexp.ts");

/**
 * 检验身份证号码是否正确,
 * @param id 身份证号码
 */
var checkIDNO = function (id) {
    var code = (id + '').toLocaleUpperCase();
    if (!_regexp__WEBPACK_IMPORTED_MODULE_0__["rIDCardNO"].test(code)) {
        return false;
    }
    // 加权因子
    var weightFactor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
    // 校验码
    var checkCode = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
    // ISO 7064:1983.MOD 11-2
    // 判断最后一位校验码是否正确
    var arr = code.substring(0, 17).split('');
    var len = arr.length;
    var num = 0;
    for (var i = 0; i < len; i++) {
        // @ts-ignore
        num = num + arr[i] * weightFactor[i];
    }
    return checkCode[num % 11] === code[17];
};
/* harmony default export */ __webpack_exports__["default"] = (checkIDNO);


/***/ }),

/***/ "./regexp.ts":
/*!*******************!*\
  !*** ./regexp.ts ***!
  \*******************/
/*! exports provided: rMobilePhone, rTelephone, rPhone, rIDCardNO, rBankCardNO, rChineseName, rEmail, rUrl, rPostcode, rAmount, rLimitAmount */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rMobilePhone", function() { return rMobilePhone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rTelephone", function() { return rTelephone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rPhone", function() { return rPhone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rIDCardNO", function() { return rIDCardNO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rBankCardNO", function() { return rBankCardNO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rChineseName", function() { return rChineseName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rEmail", function() { return rEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rUrl", function() { return rUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rPostcode", function() { return rPostcode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rAmount", function() { return rAmount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rLimitAmount", function() { return rLimitAmount; });
// 电话号码
var rMobilePhone = /^1\d{10}$/;
// 座机号码
var rTelephone = /^(\d{3,4}-)?\d{7,8}$/;
// 服务号码/联系方式 手机+座机
var rPhone = /(^1\d{10}$)|(^(0\d{2,3}-?)?\d{7,8}(-\d{3,})?$)/;
// 身份证号码
var rIDCardNO = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([012]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([012]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;
// 银行卡号
var rBankCardNO = /^\d{16,19}$/;
// 中文名称
var rChineseName = /^[\u4E00-\u9FA5]{2,}(·[\u4E00-\u9FA5]{2,})*$/;
// 邮箱地址
var rEmail = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
// url地址
var rUrl = /^https?:\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?&?[a-zA-Z0-9_-](\?)?)*)*$/i;
// 邮编
var rPostcode = /^[1-9]\d{5}(?!\d)$/;
// 金额
var rAmount = /((^[1-9]\d*)|^0)(\.\d{1,2})?$/;
/**
 * 限制金额输入, 即匹配到不合法的金额输入
 * 如: 00.11 -> 0.11, 011.11 -> 11.11, 11.110 -> 11.11
 * 推荐用法, amount.replace(rLimitAmount, '')
 * 当然可以以此来校验输入是否符合金额规则, !rLimitAmount.test(amount)
 */
var rLimitAmount = /([^0-9.])|((?<=\d+\.\d{2})\d+)|((?<=^0)0+)|(^0(?=[1-9]))|((?<=\.\d*)\.)|(^\.)/g;


/***/ })

/******/ });
});
//# sourceMappingURL=checkIDNO.dev.js.map