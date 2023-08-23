import { toRawType } from './toRawType.js';
import './toTypeString.js';
import './objectToString.js';

const isBigint = (obj) => toRawType(obj) === "bigint";

export { isBigint as default, isBigint };
