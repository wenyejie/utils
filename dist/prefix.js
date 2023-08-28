import { isString as t } from "./isString.js";
import "./toRawType.js";
import "./toTypeString.js";
import "./objectToString.js";
import "./decapitalize.js";
const x = (r) => {
  if (!t(r))
    return "";
  r = r.trim();
  const { groups: { prefix: p } } = r.match(/^(?<prefix>\w+)+(?=\.)/);
  return p;
};
export {
  x as default,
  x as prefix
};
