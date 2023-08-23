import { toRawType } from './toRawType.js';
import './toTypeString.js';
import './objectToString.js';

const isBlob = (obj) => toRawType(obj) === "blob";

export { isBlob as default, isBlob };
