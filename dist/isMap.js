import { toRawType } from './toRawType.js';
import './toTypeString.js';
import './objectToString.js';
import './decapitalize.js';

const isMap = (obj) => toRawType(obj) === "map";

export { isMap as default, isMap };
