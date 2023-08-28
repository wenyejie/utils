const l = () => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : Function("return this")();
let e;
try {
  e = globalThis;
} catch {
  e = l();
}
const t = e;
export {
  t as default,
  e as globalThis
};
