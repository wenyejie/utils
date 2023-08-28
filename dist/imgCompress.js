import { file2base64 as w } from "./file2base64.js";
import { load as x } from "./load.js";
import "./isFunction.js";
import "./toRawType.js";
import "./toTypeString.js";
import "./objectToString.js";
import "./decapitalize.js";
import "./isObject.js";
import "./hasOwn.js";
import "./hasOwnProperty.js";
import "./isUndefined.js";
import "./isNull.js";
const y = (t) => x("img", t), g = async (t) => {
  const e = await w(t);
  return await y(e);
}, p = {
  noCompressIfLarger: !0,
  maxWidth: 1024,
  maxHeight: 1024,
  fillStyle: "rgba(255, 255, 255, 0)",
  quality: 0.75
}, f = (t) => new Promise((e) => {
  const a = document.createElement("canvas"), r = a.getContext("2d");
  r.fillStyle = t.fillStyle, r.fillRect(0, 0, a.width, a.height), e({ context: r, $canvas: a });
}), H = (t, e) => {
  const a = t.naturalWidth / t.naturalHeight;
  let r, n, i = 0, s = 0, l = 0, c = 0, o = t.naturalWidth, h = t.naturalHeight;
  return a >= 1 ? (e.maxWidth > 0 ? r = t.naturalWidth > e.maxWidth ? e.maxWidth : t.naturalWidth : r = t.naturalWidth, n = r / a) : (e.maxHeight > 0 ? n = t.naturalHeight > e.maxHeight ? e.maxHeight : t.naturalHeight : n = t.naturalHeight, r = n * a), { dw: r, dh: n, dx: i, dy: s, sx: l, sy: c, sw: o, sh: h };
}, W = (t, e, a) => new Promise((r) => {
  t.toBlob(
    (n) => {
      r(new File([n], e.name, { type: e.type }));
    },
    e.type,
    a.quality
  );
}), D = async (t, e) => {
  e = Object.assign(
    { ...p },
    e
  );
  const a = await g(t), { context: r, $canvas: n } = await f(e);
  if (!n.toBlob)
    return t;
  const { dw: i, dh: s, dx: l, dy: c, sx: o, sy: h, sw: d, sh: u } = H(a, e);
  n.width = i, n.height = s, r.drawImage(a, o, h, d, u, l, c, i, s);
  const m = await W(n, t, e);
  return e.noCompressIfLarger && t.size <= m.size || m.size < 1024 ? t : m;
};
export {
  H as calcDrawSize,
  W as canvas2file,
  f as createCanvas,
  D as default,
  g as file2img
};
