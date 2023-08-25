'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const dayEnd = (date) => {
  date.setHours(23, 59, 59, 999);
  return date;
};

exports.dayEnd = dayEnd;
exports.default = dayEnd;
