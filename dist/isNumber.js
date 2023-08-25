import { toRawType } from './toRawType.js';
import './toTypeString.js';
import './objectToString.js';
import './decapitalize.js';

const isNumber = (obj) => toRawType(obj) === "number" && !Number.isNaN(obj);

export { isNumber as default, isNumber };
