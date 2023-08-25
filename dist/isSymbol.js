import { toRawType } from './toRawType.js';
import './toTypeString.js';
import './objectToString.js';
import './decapitalize.js';

const isSymbol = (obj) => toRawType(obj) === "symbol";

export { isSymbol as default, isSymbol };
