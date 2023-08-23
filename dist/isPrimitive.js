import { toRawType } from './toRawType.js';
import './toTypeString.js';
import './objectToString.js';

const isPrimitive = (obj) => {
  const type = toRawType(obj);
  return type === "string" || type === "number" || type === "boolean" || type === "bigint" || type === "symbol" || type === "undefined" || type === "null";
};

export { isPrimitive as default, isPrimitive };
