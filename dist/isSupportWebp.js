import { once as s } from "./once.js";
const n = s(() => new Promise((o, A) => {
  const r = "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=", e = new Image();
  e.onload = () => {
    e.width > 0 && e.height > 0 ? o() : A(), e.remove();
  }, e.onerror = () => {
    A(), e.remove();
  }, e.src = r;
}));
export {
  n as default,
  n as isSupportWebp
};
