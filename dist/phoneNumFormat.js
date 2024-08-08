import { isString } from "./isString.js";
const phoneNumFormat = (phone) => {
  if (Number.isInteger(phone)) {
    phone += "";
  }
  if (isString(phone)) {
    return phone.replace(/(\d{3})\d*(\d{4})/, "$1****$2");
  }
  return "";
};
export {
  phoneNumFormat
};
