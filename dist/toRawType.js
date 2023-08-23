import { toTypeString } from './toTypeString.js';
import './objectToString.js';

const toRawType = (obj) => {
  return toTypeString(obj).slice(8, -1).toLocaleLowerCase();
};

export { toRawType as default, toRawType };
