import { isString as t } from "./isString.js";
import "./toRawType.js";
import "./toTypeString.js";
import "./objectToString.js";
import "./decapitalize.js";
const s = (f) => {
  if (!t(f))
    return "";
  f = f.trim();
  const { groups: { suffix: r } } = f.match(/(?<=\.)(?<suffix>\w+)+$/);
  return r;
};
export {
  s as default,
  s as suffix
};
