import { isString } from './isString.js';
import { isInteger } from './isInteger.js';
import './toRawType.js';
import './toTypeString.js';
import './objectToString.js';

const phoneNumFormat = (phone) => {
  if (isInteger(phone)) {
    phone += "";
  }
  if (isString(phone)) {
    return phone.replace(/(\d{3})\d*(\d{4})/, "$1****$2");
  }
  return "";
};

export { phoneNumFormat as default, phoneNumFormat };
