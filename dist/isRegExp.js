import { toRawType } from './toRawType.js';
import './toTypeString.js';
import './objectToString.js';

const isRegExp = (obj) => toRawType(obj) === "regexp";

export { isRegExp as default, isRegExp };
