import { toRawType } from './toRawType.js';
import './toTypeString.js';
import './objectToString.js';

const isObject = (obj) => toRawType(obj) === "object";

export { isObject as default, isObject };
