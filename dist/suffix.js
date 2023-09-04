import { isString as t } from "./isString.js";
import "./toRawType.js";
import "./toTypeString.js";
import "./objectToString.js";
import "./decapitalize.js";
const p = (o) => {
  if (!t(o))
    return console.error(`${o} is not a string`), "";
  o = o.trim();
  const {
    groups: { suffix: r }
  } = o.match(/(?<=\.)(?<suffix>\w+)+$/);
  return r;
};
export {
  p as default,
  p as suffix
};
