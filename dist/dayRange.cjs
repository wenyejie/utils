'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const dayStart = (date) => {
  date.setHours(0, 0, 0, 0);
  return date;
};
const dayEnd = (date) => {
  date.setHours(23, 59, 59, 999);
  return date;
};

exports.dayEnd = dayEnd;
exports.dayStart = dayStart;
