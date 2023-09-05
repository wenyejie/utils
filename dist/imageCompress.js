import { file2image as d } from "./file2image.js";
import "./file2url.js";
const m = {
  maxWidth: 0,
  maxHeight: 0,
  maxSize: 0
}, h = (s, e, i) => {
  const { naturalWidth: c, naturalHeight: t } = s, r = c / t;
  let a, n;
  return r >= 1 ? (e > 0 ? a = Math.min(c, e) : a = c, n = a / r) : (i > 0 ? n = Math.min(t, i) : n = t, a = n * r), {
    dw: Math.floor(a),
    dh: Math.floor(n),
    sw: c,
    sh: t
  };
}, u = (s, e, i, c) => {
  const t = document.createElement("canvas"), r = t.getContext("2d"), { dw: a, dh: n, sw: l, sh: o } = h(s, e, i);
  return t.width = a, t.height = n, c && (r.fillStyle = c, r.fillRect(0, 0, a, n)), r.drawImage(s, 0, 0, l, o, 0, 0, a, n), t;
}, g = (s, e) => {
  e = Object.assign({ ...m }, e);
  const i = d(s);
  return document.body.appendChild(i), new Promise((c, t) => {
    i.onload = () => {
      const r = u(i, e.maxWidth, e.maxHeight, e.fileStyle), a = e.filetype ?? s.type, n = e.filename ?? s.name;
      document.body.appendChild(r), r.toBlob(
        (l) => {
          l ? l.size > s.size ? c(s) : c(new File([l], n, { type: a })) : t(new Error("canvas toBlob return null"));
        },
        a,
        e.quality
      );
    }, i.onerror = t;
  });
};
export {
  g as default,
  g as imageCompress
};
