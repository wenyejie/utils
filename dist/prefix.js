import { isString } from './isString.js';
import './toRawType.js';
import './toTypeString.js';
import './objectToString.js';

const prefix = (string) => {
  if (!isString(string)) {
    return "";
  }
  string = string.trim();
  const { groups: { prefix: prefix2 } } = string.match(/^(?<prefix>\w+)+(?=\.)/);
  return prefix2;
};

export { prefix as default, prefix };
