import globalThis from './globalThis.js';
import { storage } from './storage.js';

const local = storage(globalThis?.localStorage);

export { local as default, local };
