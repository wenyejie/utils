import { toRawType } from './toRawType.js';
import './toTypeString.js';
import './objectToString.js';

const isSet = (obj) => toRawType(obj) === "set";

export { isSet as default, isSet };
