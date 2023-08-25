import { toRawType } from './toRawType.js';
import './toTypeString.js';
import './objectToString.js';
import './decapitalize.js';

const isFunction = (obj) => toRawType(obj) === "function";

export { isFunction as default, isFunction };
