import { downloadFile as m } from "./downloadFile.js";
import { isBlob as a } from "./isBlob.js";
import { suffix as e } from "./suffix.js";
import t from "./globalThis.js";
import "./isString.js";
import "./toRawType.js";
import "./toTypeString.js";
import "./objectToString.js";
import "./decapitalize.js";
const B = (r, o) => {
  if (!a(r))
    throw new Error("参数错误: blob不是Blob类型");
  if (e(o) || (o = o + "." + r.type.replace(/image\//, ""), console.warn("参数错误: filename没有后缀名")), t.navigator?.msSaveBlob) {
    t.navigator?.msSaveBlob(r, o);
    return;
  }
  const i = t.URL.createObjectURL(r);
  m(i, o), t.URL.revokeObjectURL(i);
};
export {
  B as default,
  B as downloadBlob
};
