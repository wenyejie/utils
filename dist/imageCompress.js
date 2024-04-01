import { file2image as o } from "./file2image.js";
const h = {
  quality: 0.95,
  qualityRate: 0.05
}, d = (t, e, s) => {
  const { naturalWidth: a, naturalHeight: n } = t, r = a / n;
  let c, l;
  return r >= 1 ? (e > 0 ? c = Math.min(a, e) : c = a, l = c / r) : (s > 0 ? l = Math.min(n, s) : l = n, c = l * r), {
    dw: Math.floor(c),
    dh: Math.floor(l),
    sw: a,
    sh: n
  };
}, u = (t, e, s, a) => {
  const n = document.createElement("canvas"), r = n.getContext("2d"), { dw: c, dh: l, sw: i, sh: m } = d(t, e, s);
  return n.width = c, n.height = l, a && (r.fillStyle = a, r.fillRect(0, 0, c, l)), r.drawImage(t, 0, 0, i, m, 0, 0, c, l), n;
}, w = async (t, e) => new Promise((s) => {
  t.toBlob(
    (a) => {
      s(a);
    },
    "image/webp",
    e
  );
}), f = (t, e) => {
  e = Object.assign({ ...h }, e);
  const s = o(t);
  return new Promise((a, n) => {
    s.onload = async () => {
      const r = u(s, e.maxWidth, e.maxHeight, e.fileStyle), c = e.filetype ?? t.type, l = e.filename ?? t.name;
      let i, m = e.quality;
      do
        i = await w(r, m), m -= e.qualityRate;
      while (i?.size > e?.maxSize);
      if (i?.size > t?.size)
        return a(t);
      a(new File([i], l, { type: c }));
    }, s.onerror = n;
  });
};
export {
  f as default,
  f as imageCompress
};
