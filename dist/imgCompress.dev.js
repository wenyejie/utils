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
/******/ 	return __webpack_require__(__webpack_require__.s = "./imgCompress.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./file2base64.ts":
/*!************************!*\
  !*** ./file2base64.ts ***!
  \************************/
/*! exports provided: file2base64, default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "file2base64", function() { return file2base64; });
/**
 * File转base64
 * @param file
 */
var file2base64 = function (file) {
    return new Promise(function (resolve, reject) {
        var reader = new FileReader();
        reader.onload = function () {
            resolve(reader.result);
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
};
/* harmony default export */ __webpack_exports__["default"] = (file2base64);


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

/***/ "./imgCompress.ts":
/*!************************!*\
  !*** ./imgCompress.ts ***!
  \************************/
/*! exports provided: file2img, createCanvas, calcDrawSize, canvas2file, default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "file2img", function() { return file2img; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCanvas", function() { return createCanvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcDrawSize", function() { return calcDrawSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canvas2file", function() { return canvas2file; });
/* harmony import */ var _file2base64__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./file2base64 */ "./file2base64.ts");
/* harmony import */ var _load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./load */ "./load.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var createImg = function (url) {
    return Object(_load__WEBPACK_IMPORTED_MODULE_1__["default"])('img', url);
};
var file2img = function (file) { return __awaiter(void 0, void 0, void 0, function () {
    var base64;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Object(_file2base64__WEBPACK_IMPORTED_MODULE_0__["default"])(file)];
            case 1:
                base64 = _a.sent();
                return [4 /*yield*/, createImg(base64)];
            case 2: return [2 /*return*/, _a.sent()];
        }
    });
}); };
var createCanvas = function ($img, options) {
    return new Promise(function (resolve) {
        var $canvas = document.createElement('canvas');
        var context = $canvas.getContext('2d');
        context.fillStyle = options.fillStyle;
        context.fillRect(0, 0, $canvas.width, $canvas.height);
        resolve({ context: context, $canvas: $canvas });
    });
};
var calcDrawSize = function ($img, options) {
    var proportion = $img.naturalWidth / $img.naturalHeight;
    var dw = 0;
    var dh = 0;
    var dx = 0;
    var dy = 0;
    var sx = 0;
    var sy = 0;
    var sw = $img.naturalWidth;
    var sh = $img.naturalHeight;
    if (proportion >= 1) {
        if (options.maxWidth > 0) {
            dw = $img.naturalWidth > options.maxWidth ? options.maxWidth : $img.naturalWidth;
        }
        else {
            dw = $img.naturalWidth;
        }
        dh = dw / proportion;
    }
    else {
        if (options.maxHeight > 0) {
            dh = $img.naturalHeight > options.maxHeight ? options.maxHeight : $img.naturalHeight;
        }
        else {
            dh = $img.naturalHeight;
        }
        dw = dh * proportion;
    }
    return { dw: dw, dh: dh, dx: dx, dy: dy, sx: sx, sy: sy, sw: sw, sh: sh };
};
var canvas2file = function ($canvas, file, options) {
    return new Promise(function (resolve) {
        $canvas.toBlob(function (blob) {
            resolve(new File([blob], file.name, { type: file.type }));
        }, file.type, options.quality);
    });
};
/**
 * 图片压缩: 利用canvas对图片进行压缩
 * @param file
 * @param options
 */
var imgCompress = function (file, options) { return __awaiter(void 0, void 0, void 0, function () {
    var $img, _a, dw, dh, dx, dy, sx, sy, sw, sh, _b, context, $canvas, compressFile;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                options = Object.assign({
                    noCompressIfLarger: true,
                    maxWidth: 1024,
                    maxHeight: 1024,
                    fillStyle: 'rgba(255, 255, 255, 0)',
                    quality: 0.75 // 压缩之后的质量, 不压缩为1, 默认0.75
                }, options);
                return [4 /*yield*/, file2img(file)];
            case 1:
                $img = _c.sent();
                return [4 /*yield*/, calcDrawSize($img, options)];
            case 2:
                _a = _c.sent(), dw = _a.dw, dh = _a.dh, dx = _a.dx, dy = _a.dy, sx = _a.sx, sy = _a.sy, sw = _a.sw, sh = _a.sh;
                return [4 /*yield*/, createCanvas($img, options)];
            case 3:
                _b = _c.sent(), context = _b.context, $canvas = _b.$canvas;
                $canvas.width = dw;
                $canvas.height = dh;
                context.drawImage($img, sx, sy, sw, sh, dx, dy, dw, dh);
                return [4 /*yield*/, canvas2file($canvas, file, options)
                    // 如果压缩之后质量没有减少, 反而变大了, 则返回原图, 这样做是因为图片转化成base64之后质量会变大,
                ];
            case 4:
                compressFile = _c.sent();
                // 如果压缩之后质量没有减少, 反而变大了, 则返回原图, 这样做是因为图片转化成base64之后质量会变大,
                if (options.noCompressIfLarger && file.size <= compressFile.size) {
                    return [2 /*return*/, file];
                }
                return [2 /*return*/, compressFile];
        }
    });
}); };
/* harmony default export */ __webpack_exports__["default"] = (imgCompress);


/***/ }),

/***/ "./isFunction.ts":
/*!***********************!*\
  !*** ./isFunction.ts ***!
  \***********************/
/*! exports provided: isFunction, default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/**
 * 判断是否为函数
 * @param obj
 */
var isFunction = function (obj) { return typeof obj === 'function'; };
/* harmony default export */ __webpack_exports__["default"] = (isFunction);


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


/***/ }),

/***/ "./load.ts":
/*!*****************!*\
  !*** ./load.ts ***!
  \*****************/
/*! exports provided: load, default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "load", function() { return load; });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction */ "./isFunction.ts");
/* harmony import */ var _isObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isObject */ "./isObject.ts");
/* harmony import */ var _hasOwn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hasOwn */ "./hasOwn.ts");



/**
 * 载入script
 * @param tagName
 * @param url
 * @param options
 */
var load = function (tagName, url, options) {
    options = Object.assign({
        before: null,
        mode: 'src',
        attrs: null
    }, options);
    return new Promise(function (resolve, reject) {
        var $element = document.createElement(tagName);
        var $body = document.body;
        // @ts-ignore
        $element[options.mode] = url;
        var attrs = options.attrs;
        if (Object(_isObject__WEBPACK_IMPORTED_MODULE_1__["default"])(attrs)) {
            for (var key in attrs) {
                if (Object(_hasOwn__WEBPACK_IMPORTED_MODULE_2__["default"])(attrs, key)) {
                    $element.setAttribute(key, attrs[key]);
                }
            }
        }
        $element.onload = function () {
            resolve($element);
            $body.removeChild($element);
        };
        $element.onerror = function () {
            reject($element);
            $body.removeChild($element);
        };
        Object(_isFunction__WEBPACK_IMPORTED_MODULE_0__["default"])(options.before) && options.before();
        $body.appendChild($element);
    });
};
/* harmony default export */ __webpack_exports__["default"] = (load);


/***/ })

/******/ });
});
//# sourceMappingURL=imgCompress.dev.js.map