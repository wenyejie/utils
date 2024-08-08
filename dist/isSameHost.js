import { isString } from "./isString.js";
import { globalThis as gt } from "./globalThis.js";
const isSameHost = (urlA, urlB) => {
  if (!isString(urlA)) {
    console.error(`"${urlA}" is not a string`);
    return false;
  }
  const innerUrlA = new URL(urlA);
  let innerUrlB = isString(urlB) ? new URL(urlB) : gt.location;
  return innerUrlA.host === innerUrlB.host;
};
export {
  isSameHost
};
