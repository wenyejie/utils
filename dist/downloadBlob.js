import { downloadFile as e } from "./downloadFile.js";
import { isBlob as a } from "./isBlob.js";
import { suffix as m } from "./suffix.js";
import t from "./globalThis.js";
import "./isString.js";
import "./toRawType.js";
import "./toTypeString.js";
import "./objectToString.js";
import "./decapitalize.js";
const B = (o, r) => {
  if (!a(o)) {
    console.error(`"${o}" is not a Blob`);
    return;
  }
  if (m(r) || (r = r + "." + o.type.replace(/image\//, ""), console.warn("参数错误: filename没有后缀名")), t.navigator?.msSaveBlob) {
    t.navigator?.msSaveBlob(o, r);
    return;
  }
  const i = t.URL.createObjectURL(o);
  e(i, r), t.URL.revokeObjectURL(i);
};
export {
  B as default,
  B as downloadBlob
};
