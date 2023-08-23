import { isInteger } from './isInteger.js';

const isEvenNumber = (obj) => isInteger(obj) && obj % 2 === 0;

export { isEvenNumber as default, isEvenNumber };
