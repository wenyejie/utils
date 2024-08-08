import { downloadFile } from "./downloadFile.js";
import { isBlob } from "./isBlob.js";
import { suffix } from "./suffix.js";
import { globalThis as gt } from "./globalThis.js";
const downloadBlob = (blob, filename) => {
  var _a, _b, _c, _d;
  if (!isBlob(blob)) {
    console.error(`"${blob}" is not a Blob`);
    return;
  }
  if (!suffix(filename)) {
    filename = filename + "." + blob.type.replace(/image\//, "");
    console.warn("参数错误: filename没有后缀名");
  }
  if ((_b = (_a = gt) == null ? void 0 : _a.navigator) == null ? void 0 : _b["msSaveBlob"]) {
    (_d = (_c = gt) == null ? void 0 : _c.navigator) == null ? void 0 : _d["msSaveBlob"](blob, filename);
    return;
  }
  const url = gt.URL.createObjectURL(blob);
  downloadFile(url, filename);
  gt.URL.revokeObjectURL(url);
};
export {
  downloadBlob
};
