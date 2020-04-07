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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./ban.ts":
/*!****************!*\
  !*** ./ban.ts ***!
  \****************/
/*! exports provided: ban, default */
/*! exports used: ban */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ban; });
/* harmony import */ var _isObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject */ "./isObject.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

/**
 * 从对象中选中一些属性移除, 剩下的属性组成新的对象并返回,不影响原有对象
 * @param data
 * @param rest
 */
var ban = function (data) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    var result = {};
    if (!Object(_isObject__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(data)) {
        return result;
    }
    result = __assign({}, data);
    rest.forEach(function (key) {
        // @ts-ignore
        delete result[key];
    });
    return result;
};
/* unused harmony default export */ var _unused_webpack_default_export = (ban);


/***/ }),

/***/ "./bankCardFormat.ts":
/*!***************************!*\
  !*** ./bankCardFormat.ts ***!
  \***************************/
/*! exports provided: bankCardFormat, default */
/*! exports used: bankCardFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return bankCardFormat; });
/* harmony import */ var _isString__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isString */ "./isString.ts");
/* harmony import */ var _regexp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./regexp */ "./regexp.ts");


/**
 * 银行卡格式化
 * @param card 卡号
 */
var bankCardFormat = function (card) {
    if (!Object(_isString__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(card) || !_regexp__WEBPACK_IMPORTED_MODULE_1__[/* rBankCardNO */ "b"].test(card)) {
        return '';
    }
    card = card.trim();
    return card.replace(/(\d{4}(?=\d))/g, '$1 ');
};
/* unused harmony default export */ var _unused_webpack_default_export = (bankCardFormat);


/***/ }),

/***/ "./cached.ts":
/*!*******************!*\
  !*** ./cached.ts ***!
  \*******************/
/*! exports provided: cached, default */
/*! exports used: cached */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cached; });
/**
 * 缓存执行结果, 当结果输入相同时, 不再执行
 * @param fn
 */
var cached = function (fn) {
    var caches = {};
    return function () {
        var args = Array.prototype.join.call(arguments, ',');
        if (args in caches) {
            return caches[args];
        }
        // @ts-ignore
        return (caches[args] = fn.apply(this, arguments));
    };
};
/* unused harmony default export */ var _unused_webpack_default_export = (cached);


/***/ }),

/***/ "./checkIDNO.ts":
/*!**********************!*\
  !*** ./checkIDNO.ts ***!
  \**********************/
/*! exports provided: checkIDNO, default */
/*! exports used: checkIDNO, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return checkIDNO; });
/* harmony import */ var _regexp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regexp */ "./regexp.ts");

/**
 * 检验身份证号码是否正确,
 * @param id 身份证号码
 */
var checkIDNO = function (id) {
    var code = (id + '').toLocaleUpperCase();
    if (!_regexp__WEBPACK_IMPORTED_MODULE_0__[/* rIDCardNO */ "e"].test(code)) {
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
/* harmony default export */ __webpack_exports__["b"] = (checkIDNO);


/***/ }),

/***/ "./checkTaxpayerIDNO.ts":
/*!******************************!*\
  !*** ./checkTaxpayerIDNO.ts ***!
  \******************************/
/*! exports provided: checkTaxpayerIDNO, default */
/*! exports used: checkTaxpayerIDNO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return checkTaxpayerIDNO; });
/**
 * 校验纳税人识别号, 是否正确
 * @param taxId
 */
var checkTaxpayerIDNO = function (taxId) {
    var regArr = [
        /^[\da-z]{10,15}$/i,
        /^\d{6}[\da-z]{10,12}$/i,
        /^[a-z]\d{6}[\da-z]{9,11}$/i,
        /^[a-z]{2}\d{6}[\da-z]{8,10}$/i,
        /^\d{14}[\dx][\da-z]{4,5}$/i,
        /^\d{17}[\dx][\da-z]{1,2}$/i,
        /^[a-z]\d{14}[\dx][\da-z]{3,4}$/i,
        /^[a-z]\d{17}[\dx][\da-z]{0,1}$/i,
        /^[\d]{6}[\da-z]{13,14}$/i
    ];
    var j = regArr.length;
    for (var i = 0; i < j; i++) {
        if (regArr[i].test(taxId)) {
            return true;
        }
    }
    //纳税人识别号格式错误
    return false;
};
/* unused harmony default export */ var _unused_webpack_default_export = (checkTaxpayerIDNO);


/***/ }),

/***/ "./clone.ts":
/*!******************!*\
  !*** ./clone.ts ***!
  \******************/
/*! exports provided: clone, default */
/*! exports used: clone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return clone; });
/* harmony import */ var _isPrimitive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isPrimitive */ "./isPrimitive.ts");
/* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArray */ "./isArray.ts");


/**
 * 克隆一个对象
 * @param obj 对象
 * @param deep 是否需要深度克隆
 * @param weakMap weakMap 避免死循环
 */
var clone = function (obj, deep, weakMap) {
    if (deep === void 0) { deep = true; }
    if (weakMap === void 0) { weakMap = new WeakMap(); }
    if (Object(_isPrimitive__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(obj)) {
        return obj;
    }
    if (weakMap.get(obj)) {
        return weakMap.get(obj);
    }
    var result = Object(_isArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(obj) ? [] : {};
    weakMap.set(obj, result);
    var keys = Object.keys(obj);
    var key;
    for (var i = 0, length_1 = keys.length; i < length_1; i++) {
        key = keys[i];
        result[key] = deep ? clone(obj[key], deep, weakMap) : obj[key];
    }
    return result;
};
/* unused harmony default export */ var _unused_webpack_default_export = (clone);


/***/ }),

/***/ "./dateFormat.ts":
/*!***********************!*\
  !*** ./dateFormat.ts ***!
  \***********************/
/*! exports provided: dateFormat, default */
/*! exports used: dateFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dateFormat; });
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
    date = Object(_toDate__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(date);
    if (!Object(_isDate__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(date)) {
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
/* unused harmony default export */ var _unused_webpack_default_export = (dateFormat);


/***/ }),

/***/ "./debounce.ts":
/*!*********************!*\
  !*** ./debounce.ts ***!
  \*********************/
/*! exports provided: debounce, default */
/*! exports used: debounce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return debounce; });
/**
 * 函数防抖 - 当一定时间之后没有重新调用则执行, 电梯
 * @param fn
 * @param interval 时间间隔
 * @param isFirst 第一次是否立即执行
 */
var debounce = function (fn, interval, isFirst) {
    if (interval === void 0) { interval = 500; }
    if (isFirst === void 0) { isFirst = false; }
    var timer;
    return function () {
        var _this = this;
        var rest = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            rest[_i] = arguments[_i];
        }
        clearTimeout(timer);
        if (isFirst) {
            // @ts-ignore
            fn.apply(this, rest);
            isFirst = false;
        }
        // @ts-ignore
        timer = setTimeout(function () {
            // @ts-ignore
            fn.apply(_this, rest);
        }, interval);
    };
};
/* unused harmony default export */ var _unused_webpack_default_export = (debounce);


/***/ }),

/***/ "./downloadBlob.ts":
/*!*************************!*\
  !*** ./downloadBlob.ts ***!
  \*************************/
/*! exports provided: downloadBlob, default */
/*! exports used: downloadBlob */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return downloadBlob; });
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
    if (!Object(_isBlob__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(blob)) {
        throw new Error('参数错误: blob不是Blob类型');
    }
    if (!Object(_suffix__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(filename)) {
        filename = filename + '.' + blob.type.replace(/image\//, '');
        console.warn('参数错误: filename没有后缀名');
    }
    if (window.navigator.msSaveBlob) {
        window.navigator.msSaveBlob(blob, filename);
        return;
    }
    var url = window.URL.createObjectURL(blob);
    Object(_downloadFile__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(url, filename);
    window.URL.revokeObjectURL(url);
};
/* unused harmony default export */ var _unused_webpack_default_export = (downloadBlob);


/***/ }),

/***/ "./downloadFile.ts":
/*!*************************!*\
  !*** ./downloadFile.ts ***!
  \*************************/
/*! exports provided: downloadFile, default */
/*! exports used: default, downloadFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return downloadFile; });
/* harmony import */ var _isString__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isString */ "./isString.ts");

/**
 * 通过url下载
 * PS: 只能下载同源的链接, 如果不是同源的文件请使用downloadBlob方法
 * @param url
 * @param filename
 */
var downloadFile = function (url, filename) {
    if (!Object(_isString__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(url)) {
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
/* harmony default export */ __webpack_exports__["a"] = (downloadFile);


/***/ }),

/***/ "./each.ts":
/*!*****************!*\
  !*** ./each.ts ***!
  \*****************/
/*! exports provided: each, default */
/*! exports used: each */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return each; });
/* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray */ "./isArray.ts");
/* harmony import */ var _isObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isObject */ "./isObject.ts");
/* harmony import */ var _hasOwn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hasOwn */ "./hasOwn.ts");



var each = function (data, fn) {
    if (!Object(_isArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(data) && !Object(_isObject__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(data)) {
        return;
    }
    if (Object(_isArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(data)) {
        for (var i = 0; i < data.length; i++) {
            if (fn.call(data[i], data[i], i, data) === false) {
                return;
            }
        }
    }
    else {
        for (var key in data) {
            if (!Object(_hasOwn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(data, key)) {
                continue;
            }
            if (fn.call(data[key], data[key], key, data) === false) {
                return;
            }
        }
    }
};
/* unused harmony default export */ var _unused_webpack_default_export = (each);


/***/ }),

/***/ "./emptyObject.ts":
/*!************************!*\
  !*** ./emptyObject.ts ***!
  \************************/
/*! exports provided: emptyObject, default */
/*! exports used: default, emptyObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return emptyObject; });
/**
 * 被冻结的空对象
 */
var emptyObject = Object.freeze({});
/* harmony default export */ __webpack_exports__["a"] = (emptyObject);


/***/ }),

/***/ "./exactCalc.ts":
/*!**********************!*\
  !*** ./exactCalc.ts ***!
  \**********************/
/*! exports provided: exactCalc, default */
/*! exports used: exactCalc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return exactCalc; });
/* harmony import */ var _isNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isNumber */ "./isNumber.ts");

var calcOperator;
(function (calcOperator) {
    calcOperator["add"] = "+";
    calcOperator["subtract"] = "-";
    calcOperator["multiply"] = "*";
    calcOperator["divide"] = "/";
})(calcOperator || (calcOperator = {}));
/**
 * 精确计算, 避免出现 0.1 + 0.2 !== 0.3的情况出现
 * @param countX
 * @param countY
 * @param operator
 * @param length
 */
var exactCalc = function (countX, countY, operator, length) {
    if (length === void 0) { length = 3; }
    var multiple = Math.pow(10, length);
    countX = Number.parseFloat(countX + '') * multiple;
    countY = Number.parseFloat(countY + '') * multiple;
    if (!Object(_isNumber__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(countY) || !Object(_isNumber__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(countX)) {
        throw new Error('传入参数有误, 请重新确认!');
    }
    var result = 0;
    switch (operator) {
        case calcOperator.add:
            result = (countX + countY) / multiple;
            break;
        case calcOperator.subtract:
            result = (countX - countY) / multiple;
            break;
        case calcOperator.multiply:
            result = (countX * countY) / multiple / multiple;
            break;
        case calcOperator.divide:
            result = countX / countY;
            break;
        default:
            throw new Error('运算符传入有误, 请重新确认!');
    }
    return result;
};
/* unused harmony default export */ var _unused_webpack_default_export = (exactCalc);


/***/ }),

/***/ "./findItemByProps.ts":
/*!****************************!*\
  !*** ./findItemByProps.ts ***!
  \****************************/
/*! exports provided: findItemByProps, default */
/*! exports used: default, findItemByProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return findItemByProps; });
/* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray */ "./isArray.ts");
/* harmony import */ var _isObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isObject */ "./isObject.ts");
/* harmony import */ var _hasOwn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hasOwn */ "./hasOwn.ts");



/**
 * 根据键值对从数组中查找子项
 * @param data
 * @param key
 * @param value
 */
var findItemByProps = function (data, key, value) {
    var _a;
    var props = Object(_isObject__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(key)
        ? key
        : (_a = {}, _a[key] = value, _a);
    if (!Object(_isArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(data) || !Object(_isObject__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props)) {
        return null;
    }
    return data.find(function (item) {
        if (!Object(_isObject__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(item)) {
            return false;
        }
        for (var key_1 in props) {
            if (Object(_hasOwn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(props, key_1) && item[key_1] !== props[key_1]) {
                return false;
            }
        }
        return true;
    });
};
/* harmony default export */ __webpack_exports__["a"] = (findItemByProps);


/***/ }),

/***/ "./findValueByProps.ts":
/*!*****************************!*\
  !*** ./findValueByProps.ts ***!
  \*****************************/
/*! exports provided: findValueByProps, default */
/*! exports used: findValueByProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return findValueByProps; });
/* harmony import */ var _findItemByProps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./findItemByProps */ "./findItemByProps.ts");
/* harmony import */ var _isObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isObject */ "./isObject.ts");


/**
 * 通过属性查找对应属性值
 * @param data 查找的数据
 * @param propValue 查找的属性值
 * @param propKey 查找的属性
 * @param returnKey 返回的属性
 */
var findValueByProps = function (data, propValue, propKey, returnKey) {
    if (propKey === void 0) { propKey = 'value'; }
    if (returnKey === void 0) { returnKey = 'label'; }
    var item = Object(_findItemByProps__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(data, propKey, propValue);
    return Object(_isObject__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(item) ? item[returnKey] : '';
};
/* unused harmony default export */ var _unused_webpack_default_export = (findValueByProps);


/***/ }),

/***/ "./getDaysByMonth.ts":
/*!***************************!*\
  !*** ./getDaysByMonth.ts ***!
  \***************************/
/*! exports provided: getDaysByMonth, default */
/*! exports used: getDaysByMonth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getDaysByMonth; });
/* harmony import */ var _toDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate */ "./toDate.ts");
/* harmony import */ var _isDate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isDate */ "./isDate.ts");


/**
 * 获取当前月份的天数
 * @param date
 */
var getDaysByMonth = function (date) {
    if (date === void 0) { date = new Date(); }
    date = Object(_toDate__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(date);
    if (!Object(_isDate__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(date)) {
        console.warn('参数错误', date);
        return 0;
    }
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
};
/* unused harmony default export */ var _unused_webpack_default_export = (getDaysByMonth);


/***/ }),

/***/ "./getInfoByCardNO.ts":
/*!****************************!*\
  !*** ./getInfoByCardNO.ts ***!
  \****************************/
/*! exports provided: getInfoByCardNO, default */
/*! exports used: getInfoByCardNO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getInfoByCardNO; });
/* harmony import */ var _isOddNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isOddNumber */ "./isOddNumber.ts");
/* harmony import */ var _checkIDNO__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkIDNO */ "./checkIDNO.ts");
/* harmony import */ var _nullProtoObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nullProtoObject */ "./nullProtoObject.ts");



var getInfoByCardNO = function (cardNumber) {
    if (!Object(_checkIDNO__WEBPACK_IMPORTED_MODULE_1__[/* default */ "b"])(cardNumber)) {
        console.warn("\u53C2\u6570cardNumber: '" + cardNumber + "' \u8EAB\u4EFD\u8BC1\u53F7\u7801\u9519\u8BEF");
        return _nullProtoObject__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"];
    }
    return {
        province: cardNumber.substring(0, 2),
        city: cardNumber.substring(2, 4),
        area: cardNumber.substring(4, 6),
        address: cardNumber.substring(0, 6),
        year: cardNumber.substring(6, 10),
        month: cardNumber.substring(10, 12),
        day: cardNumber.substring(12, 14),
        date: cardNumber.substring(6, 14),
        sex: Object(_isOddNumber__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(+cardNumber.substring(16, 17)) ? '女' : '男'
    };
};
/* unused harmony default export */ var _unused_webpack_default_export = (getInfoByCardNO);


/***/ }),

/***/ "./hasOwn.ts":
/*!*******************!*\
  !*** ./hasOwn.ts ***!
  \*******************/
/*! exports provided: hasOwn, default */
/*! exports used: default, hasOwn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hasOwn; });
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
    return _hasOwnProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call(object, key);
};
/* harmony default export */ __webpack_exports__["a"] = (hasOwn);


/***/ }),

/***/ "./hasOwnProperty.ts":
/*!***************************!*\
  !*** ./hasOwnProperty.ts ***!
  \***************************/
/*! exports provided: hasOwnProperty, default */
/*! exports used: default, hasOwnProperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hasOwnProperty; });
/**
 * 指向Object原型中hasOwnProperty方法
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
/* harmony default export */ __webpack_exports__["a"] = (hasOwnProperty);


/***/ }),

/***/ "./inBrowser.ts":
/*!**********************!*\
  !*** ./inBrowser.ts ***!
  \**********************/
/*! exports provided: inBrowser, default */
/*! exports used: default, inBrowser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return inBrowser; });
/**
 * 判断是否在浏览器中
 */
var inBrowser = typeof window !== 'undefined';
/* harmony default export */ __webpack_exports__["a"] = (inBrowser);


/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! exports provided: VERSION, ban, bankCardFormat, cached, clone, dateFormat, debounce, downloadBlob, downloadFile, each, emptyObject, exactCalc, findItemByProps, findValueByProps, getInfoByCardNO, getDaysByMonth, hasOwn, hasOwnProperty, inBrowser, isAndroid, isArray, isBigint, isBoolean, isChrome, isComment, isDate, isEdge, isElement, isEmptyValue, isEvenNumber, isFirefox, isFunction, isIE, isIE9, isInteger, isIOS, isIPad, isIPhone, isMobile, isNaturalNumber, isNumber, isObject, isOddNumber, isOneDay, isOneMonth, isOneYear, isPC, isPhantom, isPlainDate, isPlainNumber, isPlainObject, isPlainString, isPositiveInteger, isPrimitive, isPromise, isRegExp, isString, isBlob, isSupportWebp, isSymbol, isText, isWeChat, money2cn, moneyFormat, noop, nullProtoObject, objectLength, objectToString, once, pick, randomInteger, randomNumber, rMobilePhone, rTelephone, rPhone, rIDCardNO, rBankCardNO, rChineseName, rEmail, rUrl, rPostcode, rAmount, rLimitAmount, removeByValue, parse, localCustomStorage, sessionCustomStorage, session, local, swap, toDate, toRawType, toTypeString, unique, useragent, checkIDNO, checkTaxpayerIDNO, suffix, url2http, url2https, throttle, prefix, mobilePhoneFormat, isOneHost */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony import */ var _ban__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ban */ "./ban.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ban", function() { return _ban__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _bankCardFormat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bankCardFormat */ "./bankCardFormat.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bankCardFormat", function() { return _bankCardFormat__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony import */ var _cached__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cached */ "./cached.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cached", function() { return _cached__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony import */ var _clone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clone */ "./clone.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return _clone__WEBPACK_IMPORTED_MODULE_3__["a"]; });

/* harmony import */ var _dateFormat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dateFormat */ "./dateFormat.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dateFormat", function() { return _dateFormat__WEBPACK_IMPORTED_MODULE_4__["a"]; });

/* harmony import */ var _debounce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./debounce */ "./debounce.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return _debounce__WEBPACK_IMPORTED_MODULE_5__["a"]; });

/* harmony import */ var _downloadBlob__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./downloadBlob */ "./downloadBlob.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "downloadBlob", function() { return _downloadBlob__WEBPACK_IMPORTED_MODULE_6__["a"]; });

/* harmony import */ var _downloadFile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./downloadFile */ "./downloadFile.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "downloadFile", function() { return _downloadFile__WEBPACK_IMPORTED_MODULE_7__["b"]; });

/* harmony import */ var _each__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./each */ "./each.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "each", function() { return _each__WEBPACK_IMPORTED_MODULE_8__["a"]; });

/* harmony import */ var _emptyObject__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./emptyObject */ "./emptyObject.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "emptyObject", function() { return _emptyObject__WEBPACK_IMPORTED_MODULE_9__["b"]; });

/* harmony import */ var _exactCalc__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./exactCalc */ "./exactCalc.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "exactCalc", function() { return _exactCalc__WEBPACK_IMPORTED_MODULE_10__["a"]; });

/* harmony import */ var _findItemByProps__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./findItemByProps */ "./findItemByProps.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findItemByProps", function() { return _findItemByProps__WEBPACK_IMPORTED_MODULE_11__["b"]; });

/* harmony import */ var _findValueByProps__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./findValueByProps */ "./findValueByProps.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findValueByProps", function() { return _findValueByProps__WEBPACK_IMPORTED_MODULE_12__["a"]; });

/* harmony import */ var _getInfoByCardNO__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./getInfoByCardNO */ "./getInfoByCardNO.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getInfoByCardNO", function() { return _getInfoByCardNO__WEBPACK_IMPORTED_MODULE_13__["a"]; });

/* harmony import */ var _getDaysByMonth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./getDaysByMonth */ "./getDaysByMonth.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDaysByMonth", function() { return _getDaysByMonth__WEBPACK_IMPORTED_MODULE_14__["a"]; });

/* harmony import */ var _hasOwn__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./hasOwn */ "./hasOwn.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasOwn", function() { return _hasOwn__WEBPACK_IMPORTED_MODULE_15__["b"]; });

/* harmony import */ var _hasOwnProperty__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./hasOwnProperty */ "./hasOwnProperty.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasOwnProperty", function() { return _hasOwnProperty__WEBPACK_IMPORTED_MODULE_16__["b"]; });

/* harmony import */ var _inBrowser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./inBrowser */ "./inBrowser.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inBrowser", function() { return _inBrowser__WEBPACK_IMPORTED_MODULE_17__["b"]; });

/* harmony import */ var _isAndroid__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./isAndroid */ "./isAndroid.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isAndroid", function() { return _isAndroid__WEBPACK_IMPORTED_MODULE_18__["a"]; });

/* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./isArray */ "./isArray.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return _isArray__WEBPACK_IMPORTED_MODULE_19__["b"]; });

/* harmony import */ var _isBigint__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./isBigint */ "./isBigint.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBigint", function() { return _isBigint__WEBPACK_IMPORTED_MODULE_20__["a"]; });

/* harmony import */ var _isBoolean__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./isBoolean */ "./isBoolean.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return _isBoolean__WEBPACK_IMPORTED_MODULE_21__["a"]; });

/* harmony import */ var _isChrome__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./isChrome */ "./isChrome.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isChrome", function() { return _isChrome__WEBPACK_IMPORTED_MODULE_22__["a"]; });

/* harmony import */ var _isComment__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./isComment */ "./isComment.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isComment", function() { return _isComment__WEBPACK_IMPORTED_MODULE_23__["a"]; });

/* harmony import */ var _isDate__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./isDate */ "./isDate.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDate", function() { return _isDate__WEBPACK_IMPORTED_MODULE_24__["b"]; });

/* harmony import */ var _isEdge__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./isEdge */ "./isEdge.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEdge", function() { return _isEdge__WEBPACK_IMPORTED_MODULE_25__["b"]; });

/* harmony import */ var _isElement__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./isElement */ "./isElement.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isElement", function() { return _isElement__WEBPACK_IMPORTED_MODULE_26__["a"]; });

/* harmony import */ var _isEmptyValue__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./isEmptyValue */ "./isEmptyValue.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEmptyValue", function() { return _isEmptyValue__WEBPACK_IMPORTED_MODULE_27__["a"]; });

/* harmony import */ var _isEvenNumber__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./isEvenNumber */ "./isEvenNumber.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEvenNumber", function() { return _isEvenNumber__WEBPACK_IMPORTED_MODULE_28__["a"]; });

/* harmony import */ var _isFirefox__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./isFirefox */ "./isFirefox.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFirefox", function() { return _isFirefox__WEBPACK_IMPORTED_MODULE_29__["a"]; });

/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./isFunction */ "./isFunction.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return _isFunction__WEBPACK_IMPORTED_MODULE_30__["b"]; });

/* harmony import */ var _isIE__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./isIE */ "./isIE.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isIE", function() { return _isIE__WEBPACK_IMPORTED_MODULE_31__["a"]; });

/* harmony import */ var _isIE9__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./isIE9 */ "./isIE9.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isIE9", function() { return _isIE9__WEBPACK_IMPORTED_MODULE_32__["a"]; });

/* harmony import */ var _isInteger__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./isInteger */ "./isInteger.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isInteger", function() { return _isInteger__WEBPACK_IMPORTED_MODULE_33__["b"]; });

/* harmony import */ var _isIOS__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./isIOS */ "./isIOS.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isIOS", function() { return _isIOS__WEBPACK_IMPORTED_MODULE_34__["a"]; });

/* harmony import */ var _isIPad__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./isIPad */ "./isIPad.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isIPad", function() { return _isIPad__WEBPACK_IMPORTED_MODULE_35__["a"]; });

/* harmony import */ var _isIPhone__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./isIPhone */ "./isIPhone.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isIPhone", function() { return _isIPhone__WEBPACK_IMPORTED_MODULE_36__["a"]; });

/* harmony import */ var _isMobile__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./isMobile */ "./isMobile.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return _isMobile__WEBPACK_IMPORTED_MODULE_37__["b"]; });

/* harmony import */ var _isNaturalNumber__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./isNaturalNumber */ "./isNaturalNumber.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNaturalNumber", function() { return _isNaturalNumber__WEBPACK_IMPORTED_MODULE_38__["a"]; });

/* harmony import */ var _isNumber__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./isNumber */ "./isNumber.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return _isNumber__WEBPACK_IMPORTED_MODULE_39__["b"]; });

/* harmony import */ var _isObject__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./isObject */ "./isObject.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return _isObject__WEBPACK_IMPORTED_MODULE_40__["b"]; });

/* harmony import */ var _isOddNumber__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./isOddNumber */ "./isOddNumber.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isOddNumber", function() { return _isOddNumber__WEBPACK_IMPORTED_MODULE_41__["b"]; });

/* harmony import */ var _isOneDay__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./isOneDay */ "./isOneDay.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isOneDay", function() { return _isOneDay__WEBPACK_IMPORTED_MODULE_42__["a"]; });

/* harmony import */ var _isOneMonth__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./isOneMonth */ "./isOneMonth.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isOneMonth", function() { return _isOneMonth__WEBPACK_IMPORTED_MODULE_43__["a"]; });

/* harmony import */ var _isOneYear__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./isOneYear */ "./isOneYear.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isOneYear", function() { return _isOneYear__WEBPACK_IMPORTED_MODULE_44__["a"]; });

/* harmony import */ var _isPC__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./isPC */ "./isPC.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPC", function() { return _isPC__WEBPACK_IMPORTED_MODULE_45__["a"]; });

/* harmony import */ var _isPhantom__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./isPhantom */ "./isPhantom.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPhantom", function() { return _isPhantom__WEBPACK_IMPORTED_MODULE_46__["a"]; });

/* harmony import */ var _isPlainDate__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./isPlainDate */ "./isPlainDate.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPlainDate", function() { return _isPlainDate__WEBPACK_IMPORTED_MODULE_47__["a"]; });

/* harmony import */ var _isPlainNumber__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./isPlainNumber */ "./isPlainNumber.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPlainNumber", function() { return _isPlainNumber__WEBPACK_IMPORTED_MODULE_48__["a"]; });

/* harmony import */ var _isPlainObject__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./isPlainObject */ "./isPlainObject.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPlainObject", function() { return _isPlainObject__WEBPACK_IMPORTED_MODULE_49__["a"]; });

/* harmony import */ var _isPlainString__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./isPlainString */ "./isPlainString.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPlainString", function() { return _isPlainString__WEBPACK_IMPORTED_MODULE_50__["a"]; });

/* harmony import */ var _isPositiveInteger__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./isPositiveInteger */ "./isPositiveInteger.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPositiveInteger", function() { return _isPositiveInteger__WEBPACK_IMPORTED_MODULE_51__["a"]; });

/* harmony import */ var _isPrimitive__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./isPrimitive */ "./isPrimitive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPrimitive", function() { return _isPrimitive__WEBPACK_IMPORTED_MODULE_52__["b"]; });

/* harmony import */ var _isPromise__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./isPromise */ "./isPromise.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPromise", function() { return _isPromise__WEBPACK_IMPORTED_MODULE_53__["a"]; });

/* harmony import */ var _isRegExp__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./isRegExp */ "./isRegExp.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRegExp", function() { return _isRegExp__WEBPACK_IMPORTED_MODULE_54__["a"]; });

/* harmony import */ var _isString__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./isString */ "./isString.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return _isString__WEBPACK_IMPORTED_MODULE_55__["b"]; });

/* harmony import */ var _isBlob__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./isBlob */ "./isBlob.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBlob", function() { return _isBlob__WEBPACK_IMPORTED_MODULE_56__["b"]; });

/* harmony import */ var _isSupportWebp__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./isSupportWebp */ "./isSupportWebp.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSupportWebp", function() { return _isSupportWebp__WEBPACK_IMPORTED_MODULE_57__["a"]; });

/* harmony import */ var _isSymbol__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./isSymbol */ "./isSymbol.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSymbol", function() { return _isSymbol__WEBPACK_IMPORTED_MODULE_58__["a"]; });

/* harmony import */ var _isText__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./isText */ "./isText.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isText", function() { return _isText__WEBPACK_IMPORTED_MODULE_59__["a"]; });

/* harmony import */ var _isWeChat__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./isWeChat */ "./isWeChat.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isWeChat", function() { return _isWeChat__WEBPACK_IMPORTED_MODULE_60__["a"]; });

/* harmony import */ var _money2cn__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./money2cn */ "./money2cn.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "money2cn", function() { return _money2cn__WEBPACK_IMPORTED_MODULE_61__["a"]; });

/* harmony import */ var _moneyFormat__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./moneyFormat */ "./moneyFormat.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "moneyFormat", function() { return _moneyFormat__WEBPACK_IMPORTED_MODULE_62__["a"]; });

/* harmony import */ var _noop__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./noop */ "./noop.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return _noop__WEBPACK_IMPORTED_MODULE_63__["a"]; });

/* harmony import */ var _nullProtoObject__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./nullProtoObject */ "./nullProtoObject.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nullProtoObject", function() { return _nullProtoObject__WEBPACK_IMPORTED_MODULE_64__["b"]; });

/* harmony import */ var _objectLength__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./objectLength */ "./objectLength.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "objectLength", function() { return _objectLength__WEBPACK_IMPORTED_MODULE_65__["a"]; });

/* harmony import */ var _objectToString__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./objectToString */ "./objectToString.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "objectToString", function() { return _objectToString__WEBPACK_IMPORTED_MODULE_66__["b"]; });

/* harmony import */ var _once__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./once */ "./once.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "once", function() { return _once__WEBPACK_IMPORTED_MODULE_67__["b"]; });

/* harmony import */ var _pick__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./pick */ "./pick.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pick", function() { return _pick__WEBPACK_IMPORTED_MODULE_68__["a"]; });

/* harmony import */ var _randomInteger__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./randomInteger */ "./randomInteger.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "randomInteger", function() { return _randomInteger__WEBPACK_IMPORTED_MODULE_69__["a"]; });

/* harmony import */ var _randomNumber__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./randomNumber */ "./randomNumber.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "randomNumber", function() { return _randomNumber__WEBPACK_IMPORTED_MODULE_70__["a"]; });

/* harmony import */ var _regexp__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./regexp */ "./regexp.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rMobilePhone", function() { return _regexp__WEBPACK_IMPORTED_MODULE_71__["g"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rTelephone", function() { return _regexp__WEBPACK_IMPORTED_MODULE_71__["j"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rPhone", function() { return _regexp__WEBPACK_IMPORTED_MODULE_71__["h"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rIDCardNO", function() { return _regexp__WEBPACK_IMPORTED_MODULE_71__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rBankCardNO", function() { return _regexp__WEBPACK_IMPORTED_MODULE_71__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rChineseName", function() { return _regexp__WEBPACK_IMPORTED_MODULE_71__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rEmail", function() { return _regexp__WEBPACK_IMPORTED_MODULE_71__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rUrl", function() { return _regexp__WEBPACK_IMPORTED_MODULE_71__["k"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rPostcode", function() { return _regexp__WEBPACK_IMPORTED_MODULE_71__["i"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rAmount", function() { return _regexp__WEBPACK_IMPORTED_MODULE_71__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rLimitAmount", function() { return _regexp__WEBPACK_IMPORTED_MODULE_71__["f"]; });

/* harmony import */ var _removeByValue__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./removeByValue */ "./removeByValue.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeByValue", function() { return _removeByValue__WEBPACK_IMPORTED_MODULE_72__["a"]; });

/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./storage */ "./storage.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return _storage__WEBPACK_IMPORTED_MODULE_73__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "localCustomStorage", function() { return _storage__WEBPACK_IMPORTED_MODULE_73__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sessionCustomStorage", function() { return _storage__WEBPACK_IMPORTED_MODULE_73__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "session", function() { return _storage__WEBPACK_IMPORTED_MODULE_73__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "local", function() { return _storage__WEBPACK_IMPORTED_MODULE_73__["a"]; });

/* harmony import */ var _swap__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./swap */ "./swap.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "swap", function() { return _swap__WEBPACK_IMPORTED_MODULE_74__["a"]; });

/* harmony import */ var _toDate__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./toDate */ "./toDate.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toDate", function() { return _toDate__WEBPACK_IMPORTED_MODULE_75__["b"]; });

/* harmony import */ var _toRawType__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./toRawType */ "./toRawType.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toRawType", function() { return _toRawType__WEBPACK_IMPORTED_MODULE_76__["b"]; });

/* harmony import */ var _toTypeString__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./toTypeString */ "./toTypeString.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toTypeString", function() { return _toTypeString__WEBPACK_IMPORTED_MODULE_77__["b"]; });

/* harmony import */ var _unique__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./unique */ "./unique.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unique", function() { return _unique__WEBPACK_IMPORTED_MODULE_78__["a"]; });

/* harmony import */ var _useragent__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./useragent */ "./useragent.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useragent", function() { return _useragent__WEBPACK_IMPORTED_MODULE_79__["b"]; });

/* harmony import */ var _checkIDNO__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./checkIDNO */ "./checkIDNO.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkIDNO", function() { return _checkIDNO__WEBPACK_IMPORTED_MODULE_80__["a"]; });

/* harmony import */ var _checkTaxpayerIDNO__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./checkTaxpayerIDNO */ "./checkTaxpayerIDNO.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkTaxpayerIDNO", function() { return _checkTaxpayerIDNO__WEBPACK_IMPORTED_MODULE_81__["a"]; });

/* harmony import */ var _suffix__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./suffix */ "./suffix.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "suffix", function() { return _suffix__WEBPACK_IMPORTED_MODULE_82__["b"]; });

/* harmony import */ var _url2http__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ./url2http */ "./url2http.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "url2http", function() { return _url2http__WEBPACK_IMPORTED_MODULE_83__["a"]; });

/* harmony import */ var _url2https__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ./url2https */ "./url2https.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "url2https", function() { return _url2https__WEBPACK_IMPORTED_MODULE_84__["a"]; });

/* harmony import */ var _throttle__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ./throttle */ "./throttle.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return _throttle__WEBPACK_IMPORTED_MODULE_85__["a"]; });

/* harmony import */ var _prefix__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ./prefix */ "./prefix.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "prefix", function() { return _prefix__WEBPACK_IMPORTED_MODULE_86__["a"]; });

/* harmony import */ var _mobilePhoneFormat__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ./mobilePhoneFormat */ "./mobilePhoneFormat.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mobilePhoneFormat", function() { return _mobilePhoneFormat__WEBPACK_IMPORTED_MODULE_87__["a"]; });

/* harmony import */ var _isOneHost__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ./isOneHost */ "./isOneHost.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isOneHost", function() { return _isOneHost__WEBPACK_IMPORTED_MODULE_88__["a"]; });

var VERSION = '1.0.19';



























































































/***/ }),

/***/ "./isAndroid.ts":
/*!**********************!*\
  !*** ./isAndroid.ts ***!
  \**********************/
/*! exports provided: isAndroid, default */
/*! exports used: isAndroid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isAndroid; });
/* harmony import */ var _useragent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useragent */ "./useragent.ts");

/**
 * 判断是不是Android
 */
var isAndroid = _useragent__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"] && _useragent__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].includes('android');
/* unused harmony default export */ var _unused_webpack_default_export = (isAndroid);


/***/ }),

/***/ "./isArray.ts":
/*!********************!*\
  !*** ./isArray.ts ***!
  \********************/
/*! exports provided: isArray, default */
/*! exports used: default, isArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isArray; });
/**
 * 判断一个对象是否为数组
 */
var isArray = Array.isArray;
/* harmony default export */ __webpack_exports__["a"] = (isArray);


/***/ }),

/***/ "./isBigint.ts":
/*!*********************!*\
  !*** ./isBigint.ts ***!
  \*********************/
/*! exports provided: isBigint, default */
/*! exports used: isBigint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isBigint; });
/**
 * 判断数据是不是bigint类型
 * @param obj
 */
var isBigint = function (obj) { return typeof obj === 'bigint'; };
/* unused harmony default export */ var _unused_webpack_default_export = (isBigint);


/***/ }),

/***/ "./isBlob.ts":
/*!*******************!*\
  !*** ./isBlob.ts ***!
  \*******************/
/*! exports provided: isBlob, default */
/*! exports used: default, isBlob */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isBlob; });
/* harmony import */ var _toRawType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toRawType */ "./toRawType.ts");

var isBlob = function (obj) {
    return Object(_toRawType__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(obj) === 'blob';
};
/* harmony default export */ __webpack_exports__["a"] = (isBlob);


/***/ }),

/***/ "./isBoolean.ts":
/*!**********************!*\
  !*** ./isBoolean.ts ***!
  \**********************/
/*! exports provided: isBoolean, default */
/*! exports used: isBoolean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isBoolean; });
/**
 * 判断数据是不是Boolean类型
 * @param obj
 */
var isBoolean = function (obj) { return obj === true || obj === false; };
/* unused harmony default export */ var _unused_webpack_default_export = (isBoolean);


/***/ }),

/***/ "./isChrome.ts":
/*!*********************!*\
  !*** ./isChrome.ts ***!
  \*********************/
/*! exports provided: isChrome, default */
/*! exports used: isChrome */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isChrome; });
/* harmony import */ var _useragent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useragent */ "./useragent.ts");
/* harmony import */ var _isEdge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isEdge */ "./isEdge.ts");


/**
 * 判断是不是ipad
 */
var isChrome = _useragent__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"] && /chrome\/\d+/.test(_useragent__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]) && !_isEdge__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"];
/* unused harmony default export */ var _unused_webpack_default_export = (isChrome);


/***/ }),

/***/ "./isComment.ts":
/*!**********************!*\
  !*** ./isComment.ts ***!
  \**********************/
/*! exports provided: isComment, default */
/*! exports used: isComment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isComment; });
/**
 * 判断是否为注释
 * @param obj
 */
var isComment = function (obj) { return (obj ? obj.nodeType === 8 : false); };
/* unused harmony default export */ var _unused_webpack_default_export = (isComment);


/***/ }),

/***/ "./isDate.ts":
/*!*******************!*\
  !*** ./isDate.ts ***!
  \*******************/
/*! exports provided: isDate, default */
/*! exports used: default, isDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isDate; });
/* harmony import */ var _toRawType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toRawType */ "./toRawType.ts");

/**
 * 判断一个数据是否为正确的date类型
 * @param obj
 */
var isDate = function (obj) {
    return Object(_toRawType__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(obj) === 'date' && obj.toString() !== 'Invalid Date';
};
/* harmony default export */ __webpack_exports__["a"] = (isDate);


/***/ }),

/***/ "./isEdge.ts":
/*!*******************!*\
  !*** ./isEdge.ts ***!
  \*******************/
/*! exports provided: isEdge, default */
/*! exports used: default, isEdge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isEdge; });
/* harmony import */ var _useragent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useragent */ "./useragent.ts");

/**
 * 判断是不是EDGE浏览器
 */
var isEdge = _useragent__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"] && _useragent__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].includes('edge');
/* harmony default export */ __webpack_exports__["a"] = (isEdge);


/***/ }),

/***/ "./isElement.ts":
/*!**********************!*\
  !*** ./isElement.ts ***!
  \**********************/
/*! exports provided: isElement, default */
/*! exports used: isElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isElement; });
/**
 * 判断是否为元素
 * @param obj
 */
var isElement = function (obj) { return (obj ? obj.nodeType === 1 : false); };
/* unused harmony default export */ var _unused_webpack_default_export = (isElement);


/***/ }),

/***/ "./isEmptyValue.ts":
/*!*************************!*\
  !*** ./isEmptyValue.ts ***!
  \*************************/
/*! exports provided: isEmptyValue, default */
/*! exports used: isEmptyValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isEmptyValue; });
/**
 * 判断一个值是否为空值
 * @param value
 */
var isEmptyValue = function (value) {
    return (value === undefined ||
        value === null ||
        value === '' ||
        Number.isNaN(value) ||
        (Array.isArray(value) && value.length === 0));
};
/* unused harmony default export */ var _unused_webpack_default_export = (isEmptyValue);


/***/ }),

/***/ "./isEvenNumber.ts":
/*!*************************!*\
  !*** ./isEvenNumber.ts ***!
  \*************************/
/*! exports provided: isEvenNumber, default */
/*! exports used: isEvenNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isEvenNumber; });
/* harmony import */ var _isInteger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isInteger */ "./isInteger.ts");

/**
 * 判断是否为偶数
 * @param obj
 */
var isEvenNumber = function (obj) { return Object(_isInteger__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(obj) && obj % 2 === 0; };
/* unused harmony default export */ var _unused_webpack_default_export = (isEvenNumber);


/***/ }),

/***/ "./isFirefox.ts":
/*!**********************!*\
  !*** ./isFirefox.ts ***!
  \**********************/
/*! exports provided: isFirefox, default */
/*! exports used: isFirefox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isFirefox; });
/* harmony import */ var _useragent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useragent */ "./useragent.ts");

var isFirefox = _useragent__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"] && /firefox\/(\d+)/.test(_useragent__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
/* unused harmony default export */ var _unused_webpack_default_export = (isFirefox);


/***/ }),

/***/ "./isFunction.ts":
/*!***********************!*\
  !*** ./isFunction.ts ***!
  \***********************/
/*! exports provided: isFunction, default */
/*! exports used: default, isFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isFunction; });
/**
 * 判断是否为函数
 * @param obj
 */
var isFunction = function (obj) { return typeof obj === 'function'; };
/* harmony default export */ __webpack_exports__["a"] = (isFunction);


/***/ }),

/***/ "./isIE.ts":
/*!*****************!*\
  !*** ./isIE.ts ***!
  \*****************/
/*! exports provided: isIE, default */
/*! exports used: isIE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isIE; });
/* harmony import */ var _useragent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useragent */ "./useragent.ts");

/**
 * 判断是不是IE浏览器
 */
var isIE = _useragent__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"] && /msie|trident/.test(_useragent__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
/* unused harmony default export */ var _unused_webpack_default_export = (isIE);


/***/ }),

/***/ "./isIE9.ts":
/*!******************!*\
  !*** ./isIE9.ts ***!
  \******************/
/*! exports provided: isIE9, default */
/*! exports used: isIE9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isIE9; });
/* harmony import */ var _useragent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useragent */ "./useragent.ts");

/**
 * 判断是不是I09E浏览器
 */
var isIE9 = _useragent__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"] && _useragent__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].includes('msie 9.0');
/* unused harmony default export */ var _unused_webpack_default_export = (isIE9);


/***/ }),

/***/ "./isIOS.ts":
/*!******************!*\
  !*** ./isIOS.ts ***!
  \******************/
/*! exports provided: isIOS, default */
/*! exports used: isIOS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isIOS; });
/* harmony import */ var _useragent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useragent */ "./useragent.ts");

/**
 * 判断是不是IOS
 */
var isIOS = _useragent__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"] && /iphone|ipad|ipod|ios/.test(_useragent__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
/* unused harmony default export */ var _unused_webpack_default_export = (isIOS);


/***/ }),

/***/ "./isIPad.ts":
/*!*******************!*\
  !*** ./isIPad.ts ***!
  \*******************/
/*! exports provided: isIPad, default */
/*! exports used: isIPad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isIPad; });
/* harmony import */ var _useragent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useragent */ "./useragent.ts");

/**
 * 判断是不是ipad
 */
var isIPad = _useragent__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"] && _useragent__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].includes('ipad');
/* unused harmony default export */ var _unused_webpack_default_export = (isIPad);


/***/ }),

/***/ "./isIPhone.ts":
/*!*********************!*\
  !*** ./isIPhone.ts ***!
  \*********************/
/*! exports provided: isIPhone, default */
/*! exports used: isIPhone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isIPhone; });
/* harmony import */ var _useragent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useragent */ "./useragent.ts");

/**
 * 判断是不是iphone
 */
var isIPhone = _useragent__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"] && _useragent__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].includes('iphone');
/* unused harmony default export */ var _unused_webpack_default_export = (isIPhone);


/***/ }),

/***/ "./isInteger.ts":
/*!**********************!*\
  !*** ./isInteger.ts ***!
  \**********************/
/*! exports provided: isInteger, default */
/*! exports used: default, isInteger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isInteger; });
/**
 * 判断是否为整数
 */
var isInteger = Number.isInteger;
/* harmony default export */ __webpack_exports__["a"] = (isInteger);


/***/ }),

/***/ "./isMobile.ts":
/*!*********************!*\
  !*** ./isMobile.ts ***!
  \*********************/
/*! exports provided: isMobile, default */
/*! exports used: default, isMobile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isMobile; });
/* harmony import */ var _useragent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useragent */ "./useragent.ts");

var isMobile = _useragent__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"] && _useragent__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].includes('mobile');
/* harmony default export */ __webpack_exports__["a"] = (isMobile);


/***/ }),

/***/ "./isNaturalNumber.ts":
/*!****************************!*\
  !*** ./isNaturalNumber.ts ***!
  \****************************/
/*! exports provided: isNaturalNumber, default */
/*! exports used: isNaturalNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isNaturalNumber; });
/* harmony import */ var _isInteger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isInteger */ "./isInteger.ts");

/**
 * 判断是否为自然数(包括0)
 * @param obj
 */
var isNaturalNumber = function (obj) { return Object(_isInteger__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(obj) && obj >= 0; };
/* unused harmony default export */ var _unused_webpack_default_export = (isNaturalNumber);


/***/ }),

/***/ "./isNumber.ts":
/*!*********************!*\
  !*** ./isNumber.ts ***!
  \*********************/
/*! exports provided: isNumber, default */
/*! exports used: default, isNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isNumber; });
/**
 * 判断一个对象是否为数字类型
 * @param obj
 */
var isNumber = function (obj) { return typeof obj === 'number' && !Number.isNaN(obj); };
/* harmony default export */ __webpack_exports__["a"] = (isNumber);


/***/ }),

/***/ "./isObject.ts":
/*!*********************!*\
  !*** ./isObject.ts ***!
  \*********************/
/*! exports provided: isObject, default */
/*! exports used: default, isObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isObject; });
/**
 * 判断是否为对象
 * @param obj
 */
var isObject = function (obj) { return obj !== null && typeof obj === 'object'; };
/* harmony default export */ __webpack_exports__["a"] = (isObject);


/***/ }),

/***/ "./isOddNumber.ts":
/*!************************!*\
  !*** ./isOddNumber.ts ***!
  \************************/
/*! exports provided: isOddNumber, default */
/*! exports used: default, isOddNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isOddNumber; });
/* harmony import */ var _isInteger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isInteger */ "./isInteger.ts");

/**
 * 判断是否为奇数
 * @param number
 */
var isOddNumber = function (number) { return Object(_isInteger__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(number) && number % 2 === 1; };
/* harmony default export */ __webpack_exports__["a"] = (isOddNumber);


/***/ }),

/***/ "./isOneDay.ts":
/*!*********************!*\
  !*** ./isOneDay.ts ***!
  \*********************/
/*! exports provided: isOneDay, default */
/*! exports used: isOneDay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isOneDay; });
/* harmony import */ var _toDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate */ "./toDate.ts");
/* harmony import */ var _isDate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isDate */ "./isDate.ts");


/**
 * 判断两个日期是否在同一天
 * @param date1
 * @param date2
 */
var isOneDay = function (date1, date2) {
    if (date2 === void 0) { date2 = new Date(); }
    date1 = Object(_toDate__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(date1);
    date2 = Object(_toDate__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(date2);
    if (!Object(_isDate__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(date1) || !Object(_isDate__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(date2)) {
        return false;
    }
    return date1.toLocaleDateString() === date2.toLocaleDateString();
};
/* unused harmony default export */ var _unused_webpack_default_export = (isOneDay);


/***/ }),

/***/ "./isOneHost.ts":
/*!**********************!*\
  !*** ./isOneHost.ts ***!
  \**********************/
/*! exports provided: isOneHost, default */
/*! exports used: isOneHost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isOneHost; });
/* harmony import */ var _isString__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isString */ "./isString.ts");

/**
 * 判断两个链接地址是否为同一个域名, 是否会跨域
 * @param urlA
 * @param urlB
 */
var isOneHost = function (urlA, urlB) {
    if (urlB === void 0) { urlB = window.location.href; }
    if (!Object(_isString__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(urlA)) {
        return false;
    }
    var $a = document.createElement('a');
    $a.href = urlA;
    var $b = document.createElement('a');
    $b.href = urlB;
    return $a.host === $b.host;
};
/* unused harmony default export */ var _unused_webpack_default_export = (isOneHost);


/***/ }),

/***/ "./isOneMonth.ts":
/*!***********************!*\
  !*** ./isOneMonth.ts ***!
  \***********************/
/*! exports provided: isOneMonth, default */
/*! exports used: isOneMonth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isOneMonth; });
/* harmony import */ var _toDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate */ "./toDate.ts");
/* harmony import */ var _isDate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isDate */ "./isDate.ts");


/**
 * 判断两个日期是否在同一月
 * @param date1
 * @param date2
 */
var isOneMonth = function (date1, date2) {
    if (date2 === void 0) { date2 = new Date(); }
    date1 = Object(_toDate__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(date1);
    date2 = Object(_toDate__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(date2);
    if (!Object(_isDate__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(date1) || !Object(_isDate__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(date2)) {
        return false;
    }
    return date1.toLocaleDateString().slice(0, 7) === date2.toLocaleDateString().slice(0, 7);
};
/* unused harmony default export */ var _unused_webpack_default_export = (isOneMonth);


/***/ }),

/***/ "./isOneYear.ts":
/*!**********************!*\
  !*** ./isOneYear.ts ***!
  \**********************/
/*! exports provided: isOneYear, default */
/*! exports used: isOneYear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isOneYear; });
/* harmony import */ var _toDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate */ "./toDate.ts");
/* harmony import */ var _isDate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isDate */ "./isDate.ts");


/**
 * 判断两个日期是否在同一月
 * @param date1
 * @param date2
 */
var isOneYear = function (date1, date2) {
    if (date2 === void 0) { date2 = new Date(); }
    date1 = Object(_toDate__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(date1);
    date2 = Object(_toDate__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(date2);
    if (!Object(_isDate__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(date1) || !Object(_isDate__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(date2)) {
        return false;
    }
    return date1.getFullYear() === date2.getFullYear();
};
/* unused harmony default export */ var _unused_webpack_default_export = (isOneYear);


/***/ }),

/***/ "./isPC.ts":
/*!*****************!*\
  !*** ./isPC.ts ***!
  \*****************/
/*! exports provided: isPC, default */
/*! exports used: isPC */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isPC; });
/* harmony import */ var _isMobile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isMobile */ "./isMobile.ts");

var isPC = !_isMobile__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"];
/* unused harmony default export */ var _unused_webpack_default_export = (isPC);


/***/ }),

/***/ "./isPhantom.ts":
/*!**********************!*\
  !*** ./isPhantom.ts ***!
  \**********************/
/*! exports provided: isPhantom, default */
/*! exports used: isPhantom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isPhantom; });
/* harmony import */ var _useragent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useragent */ "./useragent.ts");

var isPhantom = _useragent__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"] && /phantomjs/.test(_useragent__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
/* unused harmony default export */ var _unused_webpack_default_export = (isPhantom);


/***/ }),

/***/ "./isPlainDate.ts":
/*!************************!*\
  !*** ./isPlainDate.ts ***!
  \************************/
/*! exports provided: isPlainDate, default */
/*! exports used: isPlainDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isPlainDate; });
/* harmony import */ var _toRawType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toRawType */ "./toRawType.ts");

/**
 * 判断一个数据是否为date类型
 * @param obj 被判断的对象
 */
var isPlainDate = function (obj) { return Object(_toRawType__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(obj) === 'date'; };
/* unused harmony default export */ var _unused_webpack_default_export = (isPlainDate);


/***/ }),

/***/ "./isPlainNumber.ts":
/*!**************************!*\
  !*** ./isPlainNumber.ts ***!
  \**************************/
/*! exports provided: isPlainNumber, default */
/*! exports used: isPlainNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isPlainNumber; });
/**
 * 判断是否为数字
 * @param obj
 */
var isPlainNumber = function (obj) { return typeof obj === 'number'; };
/* unused harmony default export */ var _unused_webpack_default_export = (isPlainNumber);


/***/ }),

/***/ "./isPlainObject.ts":
/*!**************************!*\
  !*** ./isPlainObject.ts ***!
  \**************************/
/*! exports provided: isPlainObject, default */
/*! exports used: isPlainObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isPlainObject; });
/* harmony import */ var _toRawType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toRawType */ "./toRawType.ts");

/**
 * 判断是否为对象
 * @param obj
 */
var isPlainObject = function (obj) { return Object(_toRawType__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(obj) === 'object'; };
/* unused harmony default export */ var _unused_webpack_default_export = (isPlainObject);


/***/ }),

/***/ "./isPlainString.ts":
/*!**************************!*\
  !*** ./isPlainString.ts ***!
  \**************************/
/*! exports provided: isPlainString, default */
/*! exports used: isPlainString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isPlainString; });
var isPlainString = function (obj) { return typeof obj === 'string'; };
/* unused harmony default export */ var _unused_webpack_default_export = (isPlainString);


/***/ }),

/***/ "./isPositiveInteger.ts":
/*!******************************!*\
  !*** ./isPositiveInteger.ts ***!
  \******************************/
/*! exports provided: isPositiveInteger, default */
/*! exports used: isPositiveInteger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isPositiveInteger; });
/* harmony import */ var _isInteger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isInteger */ "./isInteger.ts");

/**
 * 判断是否为正整数(不包括0)
 * @param obj
 */
var isPositiveInteger = function (obj) { return Object(_isInteger__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(obj) && obj > 0; };
/* unused harmony default export */ var _unused_webpack_default_export = (isPositiveInteger);


/***/ }),

/***/ "./isPrimitive.ts":
/*!************************!*\
  !*** ./isPrimitive.ts ***!
  \************************/
/*! exports provided: isPrimitive, default */
/*! exports used: default, isPrimitive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isPrimitive; });
/**
 * 判断是否为原始类型
 * @param obj
 */
var isPrimitive = function (obj) {
    var type = typeof obj;
    return (type === 'string' ||
        type === 'number' ||
        type === 'boolean' ||
        type === 'bigint' ||
        type === 'symbol' ||
        obj === undefined ||
        obj === null);
};
/* harmony default export */ __webpack_exports__["a"] = (isPrimitive);


/***/ }),

/***/ "./isPromise.ts":
/*!**********************!*\
  !*** ./isPromise.ts ***!
  \**********************/
/*! exports provided: isPromise, default */
/*! exports used: isPromise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isPromise; });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction */ "./isFunction.ts");
/* harmony import */ var _isObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isObject */ "./isObject.ts");


/**
 * 判断是否为promise
 * @param obj
 */
var isPromise = function (obj) { return Object(_isObject__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(obj) && Object(_isFunction__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(obj) && Object(_isFunction__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(obj.catch); };
/* unused harmony default export */ var _unused_webpack_default_export = (isPromise);


/***/ }),

/***/ "./isRegExp.ts":
/*!*********************!*\
  !*** ./isRegExp.ts ***!
  \*********************/
/*! exports provided: isRegExp, default */
/*! exports used: isRegExp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isRegExp; });
/* harmony import */ var _toRawType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toRawType */ "./toRawType.ts");

var isRegExp = function (obj) { return Object(_toRawType__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(obj) === 'regexp'; };
/* unused harmony default export */ var _unused_webpack_default_export = (isRegExp);


/***/ }),

/***/ "./isString.ts":
/*!*********************!*\
  !*** ./isString.ts ***!
  \*********************/
/*! exports provided: isString, default */
/*! exports used: default, isString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isString; });
/**
 * 判断一个数据是否为string类型
 * @param obj
 */
var isString = function (obj) { return typeof obj === 'string' && obj.trim().length > 0; };
/* harmony default export */ __webpack_exports__["a"] = (isString);


/***/ }),

/***/ "./isSupportWebp.ts":
/*!**************************!*\
  !*** ./isSupportWebp.ts ***!
  \**************************/
/*! exports provided: isSupportWebp, default */
/*! exports used: isSupportWebp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isSupportWebp; });
/* harmony import */ var _once__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./once */ "./once.ts");

/**
 * 判断浏览器是否支持webp
 */
var isSupportWebp = Object(_once__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function () {
    return new Promise(function (resolve, reject) {
        var base64 = 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=';
        var image = new Image();
        image.onload = function () {
            var result = image.width > 0 && image.height > 0;
            if (result) {
                resolve();
            }
            else {
                reject();
            }
            image.remove();
        };
        image.onerror = function () {
            reject();
            image.remove();
        };
        image.src = base64;
    });
});
/* unused harmony default export */ var _unused_webpack_default_export = (isSupportWebp);


/***/ }),

/***/ "./isSymbol.ts":
/*!*********************!*\
  !*** ./isSymbol.ts ***!
  \*********************/
/*! exports provided: isSymbol, default */
/*! exports used: isSymbol */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isSymbol; });
/**
 * 判断是否为symbol类型
 * @param obj
 */
var isSymbol = function (obj) { return typeof obj === 'symbol'; };
/* unused harmony default export */ var _unused_webpack_default_export = (isSymbol);


/***/ }),

/***/ "./isText.ts":
/*!*******************!*\
  !*** ./isText.ts ***!
  \*******************/
/*! exports provided: isText, default */
/*! exports used: isText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isText; });
/**
 * 判断是否为文本
 * @param obj
 */
var isText = function (obj) { return (obj ? obj.nodeType === 3 : false); };
/* unused harmony default export */ var _unused_webpack_default_export = (isText);


/***/ }),

/***/ "./isWeChat.ts":
/*!*********************!*\
  !*** ./isWeChat.ts ***!
  \*********************/
/*! exports provided: isWeChat, default */
/*! exports used: isWeChat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isWeChat; });
/* harmony import */ var _useragent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useragent */ "./useragent.ts");

var isWeChat = _useragent__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"] && _useragent__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].includes('micromessenger');
/* unused harmony default export */ var _unused_webpack_default_export = (isWeChat);


/***/ }),

/***/ "./mobilePhoneFormat.ts":
/*!******************************!*\
  !*** ./mobilePhoneFormat.ts ***!
  \******************************/
/*! exports provided: mobilePhoneFormat, default */
/*! exports used: mobilePhoneFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mobilePhoneFormat; });
/* harmony import */ var _isString__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isString */ "./isString.ts");
/* harmony import */ var _regexp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./regexp */ "./regexp.ts");


/**
 * 手机号码格式化显示
 *
 * 如: 13480298111 -> 134****8111
 *
 * @param number
 */
var mobilePhoneFormat = function (number) {
    if (!Object(_isString__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(number) || !_regexp__WEBPACK_IMPORTED_MODULE_1__[/* rMobilePhone */ "g"].test(number)) {
        return '';
    }
    return number.replace(/(?<=\d{3})\w{4}(?=\d{4})/g, '****');
};
/* unused harmony default export */ var _unused_webpack_default_export = (mobilePhoneFormat);


/***/ }),

/***/ "./money2cn.ts":
/*!*********************!*\
  !*** ./money2cn.ts ***!
  \*********************/
/*! exports provided: money2cn, default */
/*! exports used: money2cn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return money2cn; });
/**
 * 金额转中文大写
 * @param n
 */
var money2cn = function (n) {
    var fraction = ['角', '分'];
    var digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
    var unit = [
        ['元', '万', '亿'],
        ['', '拾', '佰', '仟']
    ];
    n = Math.abs(n);
    var s = '';
    for (var i = 0; i < fraction.length; i++) {
        s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
    }
    s = s || '整';
    n = Math.floor(n);
    for (var i = 0; i < unit[0].length && n > 0; i++) {
        var p = '';
        for (var j = 0; j < unit[1].length && n > 0; j++) {
            p = digit[n % 10] + unit[1][j] + p;
            n = Math.floor(n / 10);
        }
        s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
    }
    return s
        .replace(/(零.)*零元/, '元')
        .replace(/(零.)+/g, '零')
        .replace(/^整$/, '零元整');
};
/* unused harmony default export */ var _unused_webpack_default_export = (money2cn);


/***/ }),

/***/ "./moneyFormat.ts":
/*!************************!*\
  !*** ./moneyFormat.ts ***!
  \************************/
/*! exports provided: moneyFormat, default */
/*! exports used: moneyFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return moneyFormat; });
/* harmony import */ var _isNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isNumber */ "./isNumber.ts");

/**
 * 金额格式化
 * @param number
 * @param options
 */
var moneyFormat = function (number, options) {
    options = Object.assign({
        decimal: 2,
        symbol: '',
        default: '',
        split: ',',
        length: 3 // 分割长度
    }, options);
    number = Number.parseFloat(number + '');
    if (!Object(_isNumber__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(number)) {
        return options.default;
    }
    var result = number.toFixed(options.decimal);
    var numberSplit = result.split('.');
    return (options.symbol +
        numberSplit[0].replace(new RegExp('\\B(?=(\\d{' + options.length + '})+(?!\\d))', 'g'), options.split) +
        '.' +
        numberSplit[1]);
};
/* unused harmony default export */ var _unused_webpack_default_export = (moneyFormat);


/***/ }),

/***/ "./noop.ts":
/*!*****************!*\
  !*** ./noop.ts ***!
  \*****************/
/*! exports provided: noop, default */
/*! exports used: noop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return noop; });
/**
 * 空函数
 */
var noop = function () { };
/* unused harmony default export */ var _unused_webpack_default_export = (noop);


/***/ }),

/***/ "./nullProtoObject.ts":
/*!****************************!*\
  !*** ./nullProtoObject.ts ***!
  \****************************/
/*! exports provided: nullProtoObject, default */
/*! exports used: default, nullProtoObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return nullProtoObject; });
/**
 * 没有原型链的空对象
 */
var nullProtoObject = function () { return Object.create(null); };
/* harmony default export */ __webpack_exports__["a"] = (nullProtoObject);


/***/ }),

/***/ "./objectLength.ts":
/*!*************************!*\
  !*** ./objectLength.ts ***!
  \*************************/
/*! exports provided: objectLength, default */
/*! exports used: objectLength */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return objectLength; });
/* harmony import */ var _isObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject */ "./isObject.ts");

/**
 * 获取对象长度
 * @param obj
 */
var objectLength = function (obj) {
    if (!Object(_isObject__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(obj)) {
        return 0;
    }
    return Object.keys(obj).length;
};
/* unused harmony default export */ var _unused_webpack_default_export = (objectLength);


/***/ }),

/***/ "./objectToString.ts":
/*!***************************!*\
  !*** ./objectToString.ts ***!
  \***************************/
/*! exports provided: objectToString, default */
/*! exports used: default, objectToString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return objectToString; });
/**
 * 指向Object原型中的toString方法
 */
var objectToString = Object.prototype.toString;
/* harmony default export */ __webpack_exports__["a"] = (objectToString);


/***/ }),

/***/ "./once.ts":
/*!*****************!*\
  !*** ./once.ts ***!
  \*****************/
/*! exports provided: once, default */
/*! exports used: default, once */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return once; });
/**
 * 缓存允许结果, 使方法只允许一次
 * @param fn
 */
var once = function (fn) {
    var cached;
    return function () {
        // @ts-ignore
        return cached || (cached = fn.apply(this, arguments));
    };
};
/* harmony default export */ __webpack_exports__["a"] = (once);


/***/ }),

/***/ "./pick.ts":
/*!*****************!*\
  !*** ./pick.ts ***!
  \*****************/
/*! exports provided: pick, default */
/*! exports used: pick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pick; });
/* harmony import */ var _isObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject */ "./isObject.ts");

/**
 * 从一个对象中选中一些属性并返回一个新函数,不影响原有对象
 * @param data
 * @param rest
 */
var pick = function (data) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    var result = {};
    if (Object(_isObject__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(data)) {
        rest.forEach(function (key) {
            result[key] = data[key];
        });
    }
    return result;
};
/* unused harmony default export */ var _unused_webpack_default_export = (pick);


/***/ }),

/***/ "./prefix.ts":
/*!*******************!*\
  !*** ./prefix.ts ***!
  \*******************/
/*! exports provided: prefix, default */
/*! exports used: prefix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return prefix; });
/* harmony import */ var _isString__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isString */ "./isString.ts");

/**
 * 获取字符串中的前缀
 * @param string 字符串
 */
var prefix = function (string) {
    if (!Object(_isString__WEBPACK_IMPORTED_MODULE_0__[/* isString */ "b"])(string)) {
        return '';
    }
    string = string.trim();
    var index = string.search(/^(\w+)+(?=\.)/);
    if (index === -1) {
        return '';
    }
    return RegExp.$1;
};
/* unused harmony default export */ var _unused_webpack_default_export = (prefix);


/***/ }),

/***/ "./randomInteger.ts":
/*!**************************!*\
  !*** ./randomInteger.ts ***!
  \**************************/
/*! exports provided: randomInteger, default */
/*! exports used: randomInteger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return randomInteger; });
/**
 * 随机整数
 * @param max
 * @param min
 */
var randomInteger = function (max, min) {
    if (min === void 0) { min = 0; }
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
/* unused harmony default export */ var _unused_webpack_default_export = (randomInteger);


/***/ }),

/***/ "./randomNumber.ts":
/*!*************************!*\
  !*** ./randomNumber.ts ***!
  \*************************/
/*! exports provided: randomNumber, default */
/*! exports used: randomNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return randomNumber; });
/**
 * 随机数
 * @param max
 * @param min
 */
var randomNumber = function (max, min) {
    if (min === void 0) { min = 0; }
    return Math.random() * (max - min) + min;
};
/* unused harmony default export */ var _unused_webpack_default_export = (randomNumber);


/***/ }),

/***/ "./regexp.ts":
/*!*******************!*\
  !*** ./regexp.ts ***!
  \*******************/
/*! exports provided: rMobilePhone, rTelephone, rPhone, rIDCardNO, rBankCardNO, rChineseName, rEmail, rUrl, rPostcode, rAmount, rLimitAmount */
/*! exports used: rAmount, rBankCardNO, rChineseName, rEmail, rIDCardNO, rLimitAmount, rMobilePhone, rPhone, rPostcode, rTelephone, rUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return rMobilePhone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return rTelephone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return rPhone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return rIDCardNO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return rBankCardNO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return rChineseName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return rEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return rUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return rPostcode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return rAmount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return rLimitAmount; });
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
var rChineseName = /^[\u4E00-\u9FA5|·]{2,}$/;
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


/***/ }),

/***/ "./removeByValue.ts":
/*!**************************!*\
  !*** ./removeByValue.ts ***!
  \**************************/
/*! exports provided: removeByValue, default */
/*! exports used: removeByValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return removeByValue; });
/* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray */ "./isArray.ts");

/**
 * 通过值移除数组对象
 * @param data
 * @param value
 */
var removeByValue = function (data, value) {
    if (Object(_isArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(data) && data.length > 0) {
        var index = data.indexOf(value);
        if (index > -1) {
            data.splice(index, 1);
        }
    }
    return data;
};
/* unused harmony default export */ var _unused_webpack_default_export = (removeByValue);


/***/ }),

/***/ "./storage.ts":
/*!********************!*\
  !*** ./storage.ts ***!
  \********************/
/*! exports provided: parse, localCustomStorage, sessionCustomStorage, session, local */
/*! exports used: local, localCustomStorage, parse, session, sessionCustomStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return localCustomStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return sessionCustomStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return session; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return local; });
/* harmony import */ var _inBrowser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inBrowser */ "./inBrowser.ts");
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
    return (JSON.parse(data) || _emptyObject__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]).v;
};
/**
 * 自定义存储类
 */
var CustomStorage = /** @class */ (function () {
    function CustomStorage(name) {
        // @ts-ignore
        this.storage = _inBrowser__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"] ? window[name + "Storage"] : _emptyObject__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"];
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


/***/ }),

/***/ "./suffix.ts":
/*!*******************!*\
  !*** ./suffix.ts ***!
  \*******************/
/*! exports provided: suffix, default */
/*! exports used: default, suffix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return suffix; });
/* harmony import */ var _isString__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isString */ "./isString.ts");

/**
 * 获取字符串中的后缀
 * @param string 字符串
 */
var suffix = function (string) {
    if (!Object(_isString__WEBPACK_IMPORTED_MODULE_0__[/* isString */ "b"])(string)) {
        return '';
    }
    string = string.trim();
    var index = string.search(/(?<=\.)(\w+)+$/);
    if (index === -1) {
        return '';
    }
    return string.substring(index, string.length);
};
/* harmony default export */ __webpack_exports__["a"] = (suffix);


/***/ }),

/***/ "./swap.ts":
/*!*****************!*\
  !*** ./swap.ts ***!
  \*****************/
/*! exports provided: swap, default */
/*! exports used: swap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return swap; });
/* harmony import */ var _hasOwn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hasOwn */ "./hasOwn.ts");

/**
 * 交换对象中的两个属性值
 * @param obj
 * @param i
 * @param j
 */
var swap = function (obj, i, j) {
    if (!Object(_hasOwn__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(obj, i) || !Object(_hasOwn__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(obj, j)) {
        return obj;
    }
    var temp = obj[i];
    obj[i] = obj[j];
    obj[j] = temp;
    return obj;
};
/* unused harmony default export */ var _unused_webpack_default_export = (swap);


/***/ }),

/***/ "./throttle.ts":
/*!*********************!*\
  !*** ./throttle.ts ***!
  \*********************/
/*! exports provided: throttle, default */
/*! exports used: throttle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return throttle; });
/**
 * 函数节流 - 间隔一定时间后执行, 地铁
 * @param fn {Function} 函数
 * @param interval {Number} 时间间隔
 * @param isFirst {boolean} 第一次是否立即执行
 * @return {Function}
 */
var throttle = function (fn, interval, isFirst) {
    if (interval === void 0) { interval = 500; }
    if (isFirst === void 0) { isFirst = true; }
    // 定时器
    var timer;
    return function () {
        var _this = this;
        var rest = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            rest[_i] = arguments[_i];
        }
        if (isFirst) {
            // @ts-ignore
            fn.apply(this, rest);
            isFirst = false;
            return;
        }
        if (timer) {
            return;
        }
        timer = window.setTimeout(function () {
            clearTimeout(timer);
            // @ts-ignore
            fn.apply(_this, rest);
        }, interval);
    };
};
/* unused harmony default export */ var _unused_webpack_default_export = (throttle);


/***/ }),

/***/ "./toDate.ts":
/*!*******************!*\
  !*** ./toDate.ts ***!
  \*******************/
/*! exports provided: toDate, default */
/*! exports used: default, toDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return toDate; });
/* harmony import */ var _isDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isDate */ "./isDate.ts");
/* harmony import */ var _isNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isNumber */ "./isNumber.ts");
/* harmony import */ var _isString__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isString */ "./isString.ts");



/**
 * 把其它格式数据转换成日期
 * @param date
 */
var toDate = function (date) {
    if (Object(_isDate__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(date)) {
        return date;
    }
    if (!date) {
        return;
    }
    if (Object(_isString__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(date) && /^\d+$/.test(date)) {
        date = Number.parseInt(date);
    }
    if (Object(_isNumber__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(date)) {
        var dateStr = date + '';
        if (dateStr.length >= 8) {
            if (dateStr.length > 13) {
                date = Number.parseInt((date + '').substring(0, 13));
            }
            else {
                date = dateStr.padEnd(13, '0');
            }
            date = Object(_isString__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(date) ? Number.parseInt(date) : date;
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
    return Object(_isDate__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(date) ? date : undefined;
};
/* harmony default export */ __webpack_exports__["a"] = (toDate);


/***/ }),

/***/ "./toRawType.ts":
/*!**********************!*\
  !*** ./toRawType.ts ***!
  \**********************/
/*! exports provided: toRawType, default */
/*! exports used: default, toRawType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return toRawType; });
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
    return Object(_toTypeString__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(obj)
        .slice(8, -1)
        .toLocaleLowerCase();
};
/* harmony default export */ __webpack_exports__["a"] = (toRawType);


/***/ }),

/***/ "./toTypeString.ts":
/*!*************************!*\
  !*** ./toTypeString.ts ***!
  \*************************/
/*! exports provided: toTypeString, default */
/*! exports used: default, toTypeString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return toTypeString; });
/* harmony import */ var _objectToString__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectToString */ "./objectToString.ts");

/**
 * 返回对象的类型
 * @param obj
 */
var toTypeString = function (obj) {
    return _objectToString__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].call(obj).toLocaleLowerCase();
};
/* harmony default export */ __webpack_exports__["a"] = (toTypeString);


/***/ }),

/***/ "./unique.ts":
/*!*******************!*\
  !*** ./unique.ts ***!
  \*******************/
/*! exports provided: unique, default */
/*! exports used: unique */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return unique; });
/**
 * 数组去重
 * @param array
 */
var unique = function (array) {
    return Array.from(new Set(array));
};
/* unused harmony default export */ var _unused_webpack_default_export = (unique);


/***/ }),

/***/ "./url2http.ts":
/*!*********************!*\
  !*** ./url2http.ts ***!
  \*********************/
/*! exports provided: url2http, default */
/*! exports used: url2http */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return url2http; });
/* harmony import */ var _isString__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isString */ "./isString.ts");

/**
 * url2https
 * @param url
 */
var url2http = function (url) {
    if (!Object(_isString__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(url)) {
        return '';
    }
    if (!/^https/.test(url)) {
        return url;
    }
    return url.replace(/^https/, 'http');
};
/* unused harmony default export */ var _unused_webpack_default_export = (url2http);


/***/ }),

/***/ "./url2https.ts":
/*!**********************!*\
  !*** ./url2https.ts ***!
  \**********************/
/*! exports provided: url2https, default */
/*! exports used: url2https */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return url2https; });
/* harmony import */ var _isString__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isString */ "./isString.ts");

/**
 * url2https
 * @param url
 */
var url2https = function (url) {
    if (!Object(_isString__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(url)) {
        return '';
    }
    if (/^https/.test(url)) {
        return url;
    }
    return url.replace(/^http/, 'https');
};
/* unused harmony default export */ var _unused_webpack_default_export = (url2https);


/***/ }),

/***/ "./useragent.ts":
/*!**********************!*\
  !*** ./useragent.ts ***!
  \**********************/
/*! exports provided: useragent, default */
/*! exports used: default, useragent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useragent; });
/* harmony import */ var _inBrowser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inBrowser */ "./inBrowser.ts");

/**
 * 获取浏览器的ua
 */
var useragent = _inBrowser__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"] && window.navigator.userAgent.toLocaleLowerCase();
/* harmony default export */ __webpack_exports__["a"] = (useragent);


/***/ })

/******/ });
});
//# sourceMappingURL=storm.dev.js.map