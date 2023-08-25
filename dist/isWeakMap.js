import { toRawType } from './toRawType.js';
import './toTypeString.js';
import './objectToString.js';
import './decapitalize.js';

const isWeakMap = (obj) => toRawType(obj) === "weakMap";

export { isWeakMap as default, isWeakMap };
