import { toRawType } from './toRawType.js';
import './toTypeString.js';
import './objectToString.js';
import './decapitalize.js';

const isWeakSet = (obj) => toRawType(obj) === "weakSet";

export { isWeakSet as default, isWeakSet };
