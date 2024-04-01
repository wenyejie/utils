import { isObject as t } from "./isObject.js";
const n = (e) => t(e) ? Object.keys(e).length : (console.error(`"${e}" is not a Object`), 0);
export {
  n as default,
  n as objectLength
};
