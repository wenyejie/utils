import globalThis from './globalThis.js';
import { storage } from './storage.js';

const session = storage(globalThis?.sessionStorage);

export { session as default, session };
