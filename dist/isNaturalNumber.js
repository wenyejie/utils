import { isInteger } from './isInteger.js';

const isNaturalNumber = (obj) => isInteger(obj) && obj >= 0;

export { isNaturalNumber as default, isNaturalNumber };
