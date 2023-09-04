import { isString as t } from "./isString.js";
import "./toRawType.js";
import "./toTypeString.js";
import "./objectToString.js";
import "./decapitalize.js";
const x = (r) => {
  if (!t(r))
    return console.error(`${r} is not a string`), "";
  r = r.trim();
  const {
    groups: { prefix: o }
  } = r.match(/^(?<prefix>\w+)+(?=\.)/);
  return o;
};
export {
  x as default,
  x as prefix
};
