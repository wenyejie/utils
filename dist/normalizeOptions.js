import { toRawType as i } from "./toRawType.js";
const f = (r, o, n) => {
  const e = i(r);
  if (e === "undefined")
    return { ...n };
  if (e === "object")
    return { ...r };
  const t = { ...n };
  return t[o[e]] = r, t;
};
export {
  f as normalizeOptions
};
