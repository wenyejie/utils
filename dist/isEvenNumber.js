import { isInteger as r } from "./isInteger.js";
const s = (e) => r(e) && e % 2 === 0;
export {
  s as default,
  s as isEvenNumber
};
