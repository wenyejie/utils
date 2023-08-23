import { toRawType } from './toRawType.js';
import './toTypeString.js';
import './objectToString.js';

const isPlainNumber = (obj) => toRawType(obj) === "number";

export { isPlainNumber as default, isPlainNumber };
