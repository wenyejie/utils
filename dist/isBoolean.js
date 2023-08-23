import { toRawType } from './toRawType.js';
import './toTypeString.js';
import './objectToString.js';

const isBoolean = (obj) => toRawType(obj) === "boolean";

export { isBoolean as default, isBoolean };
