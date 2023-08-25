import { toRawType } from './toRawType.js';
import './toTypeString.js';
import './objectToString.js';
import './decapitalize.js';

const isPlainNumber = (obj) => toRawType(obj) === "number";

export { isPlainNumber as default, isPlainNumber };
