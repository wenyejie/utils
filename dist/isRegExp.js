import { toRawType } from './toRawType.js';
import './toTypeString.js';
import './objectToString.js';
import './decapitalize.js';

const isRegExp = (obj) => toRawType(obj) === "regexp";

export { isRegExp as default, isRegExp };
