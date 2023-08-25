import { isString } from './isString.js';
import { removeSpace } from './removeSpace.js';
import './toRawType.js';
import './toTypeString.js';
import './objectToString.js';
import './decapitalize.js';

const bankCardFormat = (card) => {
  if (!isString(card)) {
    return "";
  }
  return removeSpace(card).replace(/(\d{4}(?=\d))/g, "$1 ");
};

export { bankCardFormat, bankCardFormat as default };
