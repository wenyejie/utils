import { rIDCardNO } from './regexp.js';

const weightFactor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
const checkCode = ["1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"];
const checkIDNO = (id) => {
  const code = (id + "").toLocaleUpperCase();
  if (!rIDCardNO.test(code)) {
    return false;
  }
  const arr = code.substring(0, 17).split("");
  const len = arr.length;
  let num = 0;
  for (let i = 0; i < len; i++) {
    num = num + +arr[i] * weightFactor[i];
  }
  return checkCode[num % 11] === code[17];
};

export { checkIDNO, checkIDNO as default };
