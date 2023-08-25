import { toRawType } from './toRawType.js';
import './toTypeString.js';
import './objectToString.js';
import './decapitalize.js';

const isInvalidDate = (obj) => toRawType(obj) === "date" && obj.toString() === "Invalid Date";

export { isInvalidDate as default, isInvalidDate };
