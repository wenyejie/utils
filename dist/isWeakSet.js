import { toRawType } from './toRawType.js';
import './toTypeString.js';
import './objectToString.js';

const isWeakSet = (obj) => toRawType(obj) === "weakset";

export { isWeakSet as default, isWeakSet };
