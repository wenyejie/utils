import { toRawType } from './toRawType.js';
import './toTypeString.js';
import './objectToString.js';
import './decapitalize.js';

const isBigint = (obj) => toRawType(obj) === "bigint";

export { isBigint as default, isBigint };
