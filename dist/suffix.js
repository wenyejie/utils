import { isString as r } from "./isString.js";
const t = (f) => {
  if (!r(f))
    return console.error(`"${f}" is not a string`), "";
  f = f.trim();
  const {
    groups: { suffix: o }
  } = f.match(/(?<=\.)(?<suffix>\w+)+$/);
  return o;
};
export {
  t as default,
  t as suffix
};
