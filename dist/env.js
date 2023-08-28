import i from "./globalThis.js";
const n = () => typeof window < "u", a = () => typeof global < "u", s = () => n() ? i.navigator.userAgent.toLocaleLowerCase() : "", o = () => s().includes("android"), e = () => s().includes("edge"), t = () => /chrome\/\d+/.test(s()) && !e(), r = () => /safari/.test(s()) && !t(), l = () => /firefox\/(\d+)/.test(s()), m = () => /msie|trident/.test(s()), f = () => s().includes("msie 9.0"), h = () => /iphone|ipad|ipod|ios/.test(s()), p = () => s().includes("ipad"), g = () => s().includes("iphone"), c = () => s().includes("mobile"), w = () => !c(), b = () => /phantomjs/.test(s()), x = () => s().includes("micromessenger"), I = () => s().includes("windows"), C = () => s().includes("macintosh"), d = () => s().includes("ubuntu"), P = () => s().includes("linux") && !d() && !o();
export {
  n as inBrowser,
  a as inNode,
  o as isAndroid,
  t as isChrome,
  e as isEdge,
  l as isFirefox,
  m as isIE,
  f as isIE9,
  h as isIOS,
  p as isIPad,
  g as isIPhone,
  P as isLinux,
  C as isMac,
  c as isMobile,
  w as isPC,
  b as isPhantom,
  r as isSafari,
  d as isUbuntu,
  x as isWeChat,
  I as isWindows,
  s as useragent
};
