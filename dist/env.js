import globalThis from './globalThis.js';

const inBrowser = () => typeof window !== "undefined";
const inNode = () => typeof global !== "undefined";
const useragent = () => inBrowser() ? globalThis.navigator.userAgent.toLocaleLowerCase() : "";
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

export { inBrowser, inNode, isAndroid, isChrome, isEdge, isFirefox, isIE, isIE9, isIOS, isIPad, isIPhone, isLinux, isMac, isMobile, isPC, isPhantom, isSafari, isUbuntu, isWeChat, isWindows, useragent };
