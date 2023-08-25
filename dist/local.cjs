'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const globalThis = require('./globalThis.cjs');
const storage = require('./storage.cjs');

const local = storage.storage(globalThis.default?.localStorage);

exports.default = local;
exports.local = local;
