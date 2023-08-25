'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const dayStart = (date) => {
  date.setHours(0, 0, 0, 0);
  return date;
};

exports.dayStart = dayStart;
exports.default = dayStart;
