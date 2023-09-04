import { isString as n } from "./isString.js";
import "./toRawType.js";
import "./toTypeString.js";
import "./objectToString.js";
import "./decapitalize.js";
const m = (o, e = "") => {
  if (!n(o)) {
    console.error(`${o} is not a string`);
    return;
  }
  const t = document.createElement("a");
  t.style.display = "none", t.href = o, t.setAttribute("download", e), t.download || t.setAttribute("target", "_blank"), document.body.appendChild(t), t.click(), document.body.removeChild(t);
};
export {
  m as default,
  m as downloadFile
};
