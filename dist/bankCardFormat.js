import { isString } from "./isString.js";
import { removeSpace } from "./removeSpace.js";
const bankCardFormat = (card) => {
  if (!isString(card)) {
    console.error(`"${card}" is not a string`);
    return "";
  }
  return removeSpace(card).replace(/(\d{4}(?=\d))/g, "$1 ");
};
export {
  bankCardFormat
};
