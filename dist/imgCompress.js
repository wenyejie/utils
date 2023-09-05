import { file2base64 as w } from "./file2base64.js";
import { load as x } from "./load.js";
const y = (t) => x("img", t), g = async (t) => {
  const e = await w(t);
  return await y(e);
}, f = {
  noCompressIfLarger: !0,
  maxWidth: 1024,
  maxHeight: 1024,
  fillStyle: "rgba(255, 255, 255, 0)",
  quality: 0.75
}, H = (t) => new Promise((e) => {
  const a = document.createElement("canvas"), r = a.getContext("2d");
  r.fillStyle = t.fillStyle, r.fillRect(0, 0, a.width, a.height), e({ context: r, $canvas: a });
}), W = (t, e) => {
  const a = t.naturalWidth / t.naturalHeight;
  let r, n, s = 0, l = 0, c = 0, i = 0, h = t.naturalWidth, d = t.naturalHeight;
  return a >= 1 ? (e.maxWidth > 0 ? r = t.naturalWidth > e.maxWidth ? e.maxWidth : t.naturalWidth : r = t.naturalWidth, n = r / a) : (e.maxHeight > 0 ? n = t.naturalHeight > e.maxHeight ? e.maxHeight : t.naturalHeight : n = t.naturalHeight, r = n * a), { dw: r, dh: n, dx: s, dy: l, sx: c, sy: i, sw: h, sh: d };
}, b = (t, e, a) => new Promise((r) => {
  t.toBlob(
    (n) => {
      r(new File([n], e.name, { type: e.type }));
    },
    e.type,
    a.quality
  );
}), I = async (t, e) => {
  e = Object.assign({ ...f }, e);
  const a = await g(t), { context: r, $canvas: n } = await H(e);
  if (!n.toBlob)
    return t;
  const { dw: s, dh: l, dx: c, dy: i, sx: h, sy: d, sw: o, sh: m } = W(a, e);
  n.width = s, n.height = l, r.drawImage(a, h, d, o, m, c, i, s, l);
  const u = await b(n, t, e);
  return e.noCompressIfLarger && t.size <= u.size || u.size < 1024 ? t : u;
};
export {
  W as calcDrawSize,
  b as canvas2file,
  H as createCanvas,
  I as default,
  g as file2img
};
