import { isString } from './isString.js';
import './toRawType.js';
import './toTypeString.js';
import './objectToString.js';

const suffix = (string) => {
  if (!isString(string)) {
    return "";
  }
  string = string.trim();
  const { groups: { suffix: suffix2 } } = string.match(/(?<=\.)(?<suffix>\w+)+$/);
  return suffix2;
};

export { suffix as default, suffix };
