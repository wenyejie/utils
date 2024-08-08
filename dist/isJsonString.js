import { isString } from "./isString.js";
const isJsonString = (obj) => {
  if (!isString(obj)) {
    return false;
  }
  try {
    JSON.parse(obj);
    return true;
  } catch (e) {
    return false;
  }
};
export {
  isJsonString
};
