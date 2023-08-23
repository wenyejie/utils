'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const globalThis = require('./globalThis.cjs');

const inBrowser = () => typeof window !== "undefined";
const inNode = () => typeof global !== "undefined";
const useragent = () => inBrowser() ? globalThis.default.navigator.userAgent.toLocaleLowerCase() : "";
const isAndroid = () => useragent().includes("android");
const isEdge = () => useragent().includes("edge");
const isChrome = () => /chrome\/\d+/.test(useragent()) && !isEdge();
const isSafari = () => /safari/.test(useragent()) && !isChrome();
const isFirefox = () => /firefox\/(\d+)/.test(useragent());
const isIE = () => /msie|trident/.test(useragent());
const isIE9 = () => useragent().includes("msie 9.0");
const isIOS = () => /iphone|ipad|ipod|ios/.test(useragent());
const isIPad = () => useragent().includes("ipad");
const isIPhone = () => useragent().includes("iphone");
const isMobile = () => useragent().includes("mobile");
const isPC = () => !isMobile();
const isPhantom = () => /phantomjs/.test(useragent());
const isWeChat = () => useragent().includes("micromessenger");
const isWindows = () => useragent().includes("windows");
const isMac = () => useragent().includes("macintosh");
const isUbuntu = () => useragent().includes("ubuntu");
const isLinux = () => useragent().includes("linux") && !isUbuntu() && !isAndroid();

exports.inBrowser = inBrowser;
exports.inNode = inNode;
exports.isAndroid = isAndroid;
exports.isChrome = isChrome;
exports.isEdge = isEdge;
exports.isFirefox = isFirefox;
exports.isIE = isIE;
exports.isIE9 = isIE9;
exports.isIOS = isIOS;
exports.isIPad = isIPad;
exports.isIPhone = isIPhone;
exports.isLinux = isLinux;
exports.isMac = isMac;
exports.isMobile = isMobile;
exports.isPC = isPC;
exports.isPhantom = isPhantom;
exports.isSafari = isSafari;
exports.isUbuntu = isUbuntu;
exports.isWeChat = isWeChat;
exports.isWindows = isWindows;
exports.useragent = useragent;
