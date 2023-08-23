import { isOddNumber } from './isOddNumber.js';
import { checkIDNO } from './checkIDNO.js';
import './isInteger.js';
import './regexp.js';

const getInfoByCardNO = (card) => {
  const cardInfo = {};
  if (checkIDNO(card)) {
    Object.assign(cardInfo, {
      province: card.substring(0, 2),
      city: card.substring(2, 4),
      area: card.substring(4, 6),
      address: card.substring(0, 6),
      year: card.substring(6, 10),
      month: card.substring(10, 12),
      day: card.substring(12, 14),
      date: card.substring(6, 14),
      sex: isOddNumber(+card.substring(16, 17)) ? "1" : "2"
      // male, female
    });
  }
  return cardInfo;
};

export { getInfoByCardNO as default, getInfoByCardNO };
