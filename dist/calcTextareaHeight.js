import { isFirefox as h } from "./env.js";
import { isNumber as s } from "./isNumber.js";
import "./globalThis.js";
import "./toRawType.js";
import "./toTypeString.js";
import "./objectToString.js";
import "./decapitalize.js";
let t;
const b = `
  height:0 !important;
  visibility:hidden !important;
  ${h() ? "" : "overflow:hidden !important;"}
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
  const e = window.getComputedStyle(n), p = e.getPropertyValue("box-sizing"), r = Number.parseFloat(e.getPropertyValue("padding-bottom")) + Number.parseFloat(e.getPropertyValue("padding-top")), a = Number.parseFloat(e.getPropertyValue("border-bottom-width")) + Number.parseFloat(e.getPropertyValue("border-top-width"));
  return { contextStyle: c.map((l) => `${l}:${e.getPropertyValue(l)}`).join(";"), paddingSize: r, borderSize: a, boxSizing: p };
}
function H(n, e = 1, p) {
  t || (t = document.createElement("textarea"), document.body.appendChild(t));
  const { paddingSize: r, borderSize: a, boxSizing: d, contextStyle: l } = u(n);
  t.setAttribute("style", `${l};${b}`), t.value = n.value || n.placeholder || "";
  let o = t.scrollHeight;
  const g = {};
  d === "border-box" ? o = o + a : d === "content-box" && (o = o - r), t.value = "";
  const m = t.scrollHeight - r;
  if (s(e)) {
    let i = m * e;
    d === "border-box" && (i = i + r + a), o = Math.max(i, o), g.minHeight = `${i}px`;
  }
  if (s(p)) {
    let i = m * p;
    d === "border-box" && (i = i + r + a), o = Math.min(i, o);
  }
  return g.height = `${o}px`, t.parentNode?.removeChild(t), t = void 0, g;
}
export {
  H as calcTextareaHeight,
  H as default
};
