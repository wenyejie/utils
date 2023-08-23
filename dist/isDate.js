import { toRawType } from './toRawType.js';
import './toTypeString.js';
import './objectToString.js';

const isDate = (obj) => toRawType(obj) === "date" && obj.toString() !== "Invalid Date";

export { isDate as default, isDate };
