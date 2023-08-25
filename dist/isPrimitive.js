import { toRawType } from './toRawType.js';
import './toTypeString.js';
import './objectToString.js';
import './decapitalize.js';

const isPrimitive = (obj) => {
  const type = toRawType(obj);
  switch (type) {
    case "string":
    case "number":
    case "boolean":
    case "bigint":
    case "symbol":
    case "undefined":
    case "null":
      return true;
    default:
      return false;
  }
};

export { isPrimitive as default, isPrimitive };
