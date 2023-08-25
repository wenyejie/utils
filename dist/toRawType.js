import { toTypeString } from './toTypeString.js';
import { decapitalize } from './decapitalize.js';
import './objectToString.js';

const toRawType = (obj) => {
  return decapitalize(toTypeString(obj).slice(8, -1));
};

export { toRawType as default, toRawType };
