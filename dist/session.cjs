'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const globalThis = require('./globalThis.cjs');
const storage = require('./storage.cjs');

const session = storage.storage(globalThis.default?.sessionStorage);

exports.default = session;
exports.session = session;
