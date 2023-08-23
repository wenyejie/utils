import { toRawType } from './toRawType.js';
import './toTypeString.js';
import './objectToString.js';

const isString = (obj) => toRawType(obj) === "string" && obj.trim().length > 0;

export { isString as default, isString };
