'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const isOddNumber = require('./isOddNumber.cjs');
const checkIDNO = require('./checkIDNO.cjs');
require('./isInteger.cjs');
require('./regexp.cjs');

const getInfoByCardNO = (card) => {
  const cardInfo = {};
  if (checkIDNO.checkIDNO(card)) {
    Object.assign(cardInfo, {
      province: card.substring(0, 2),
      city: card.substring(2, 4),
      area: card.substring(4, 6),
      address: card.substring(0, 6),
      year: card.substring(6, 10),
      month: card.substring(10, 12),
      day: card.substring(12, 14),
      date: card.substring(6, 14),
      sex: isOddNumber.isOddNumber(+card.substring(16, 17)) ? "1" : "2"
      // male, female
    });
  }
  return cardInfo;
};

exports.default = getInfoByCardNO;
exports.getInfoByCardNO = getInfoByCardNO;
