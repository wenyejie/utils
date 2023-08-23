import { toRawType } from './toRawType.js';
import './toTypeString.js';
import './objectToString.js';

const isWeakMap = (obj) => toRawType(obj) === "weakmap";

export { isWeakMap as default, isWeakMap };
