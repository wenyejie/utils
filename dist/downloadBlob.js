import { downloadFile as a } from "./downloadFile.js";
import { isBlob as i } from "./isBlob.js";
import { suffix as s } from "./suffix.js";
import t from "./globalThis.js";
const f = (o, r) => {
  if (!i(o)) {
    console.error(`"${o}" is not a Blob`);
    return;
  }
  if (s(r) || (r = r + "." + o.type.replace(/image\//, ""), console.warn("参数错误: filename没有后缀名")), t?.navigator?.msSaveBlob) {
    t?.navigator?.msSaveBlob(o, r);
    return;
  }
  const e = t.URL.createObjectURL(o);
  a(e, r), t.URL.revokeObjectURL(e);
};
export {
  f as default,
  f as downloadBlob
};
