import { isFirefox as b } from "./env.js";
import { isNumber as h } from "./isNumber.js";
import "./globalThis.js";
let t;
const m = `
  height:0 !important;
  visibility:hidden !important;
  ${b() ? "" : "overflow:hidden !important;"}
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`, c = [
  "letter-spacing",
  "line-height",
  "padding-top",
  "padding-bottom",
  "font-family",
  "font-weight",
  "font-size",
  "text-rendering",
  "text-transform",
  "width",
  "text-indent",
  "padding-left",
  "padding-right",
  "border-width",
  "box-sizing"
];
function u(n) {
  const e = window.getComputedStyle(n), l = e.getPropertyValue("box-sizing"), r = Number.parseFloat(e.getPropertyValue("padding-bottom")) + Number.parseFloat(e.getPropertyValue("padding-top")), a = Number.parseFloat(e.getPropertyValue("border-bottom-width")) + Number.parseFloat(e.getPropertyValue("border-top-width"));
  return { contextStyle: c.map((p) => `${p}:${e.getPropertyValue(p)}`).join(";"), paddingSize: r, borderSize: a, boxSizing: l };
}
function S(n, e = 1, l) {
  t || (t = document.createElement("textarea"), document.body.appendChild(t));
  const { paddingSize: r, borderSize: a, boxSizing: d, contextStyle: p } = u(n);
  t.setAttribute("style", `${p};${m}`), t.value = n.value || n.placeholder || "";
  let o = t.scrollHeight;
  const g = {};
  d === "border-box" ? o = o + a : d === "content-box" && (o = o - r), t.value = "";
  const s = t.scrollHeight - r;
  if (h(e)) {
    let i = s * e;
    d === "border-box" && (i = i + r + a), o = Math.max(i, o), g.minHeight = `${i}px`;
  }
  if (h(l)) {
    let i = s * l;
    d === "border-box" && (i = i + r + a), o = Math.min(i, o);
  }
  return g.height = `${o}px`, t.parentNode?.removeChild(t), t = void 0, g;
}
export {
  S as calcTextareaHeight,
  S as default
};
