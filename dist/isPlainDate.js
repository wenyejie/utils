import { toRawType } from './toRawType.js';
import './toTypeString.js';
import './objectToString.js';
import './decapitalize.js';

const isPlainDate = (obj) => toRawType(obj) === "date";

export { isPlainDate as default, isPlainDate };
