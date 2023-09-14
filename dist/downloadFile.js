import { isString as n } from "./isString.js";
const i = (e, o = "") => {
  if (!n(e)) {
    console.error(`"${e}" is not a string`);
    return;
  }
  const t = document.createElement("a");
  t.style.display = "none", t.href = e, t.setAttribute("download", o), t.download || t.setAttribute("target", "_blank"), document.body.appendChild(t), t.click(), document.body.removeChild(t);
};
export {
  i as default,
  i as downloadFile
};
