import { toRawType } from './toRawType.js';
import './toTypeString.js';
import './objectToString.js';
import './decapitalize.js';

const isDate = (obj) => toRawType(obj) === "date" && obj.toString() !== "Invalid Date";

export { isDate as default, isDate };
