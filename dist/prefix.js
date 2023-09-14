import { isString as o } from "./isString.js";
const f = (r) => {
  if (!o(r))
    return console.error(`"${r}" is not a string`), "";
  r = r.trim();
  const {
    groups: { prefix: e }
  } = r.match(/^(?<prefix>\w+)+(?=\.)/);
  return e;
};
export {
  f as default,
  f as prefix
};
