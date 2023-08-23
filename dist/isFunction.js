import { toRawType } from './toRawType.js';
import './toTypeString.js';
import './objectToString.js';

const isFunction = (obj) => toRawType(obj) === "function";

export { isFunction as default, isFunction };
