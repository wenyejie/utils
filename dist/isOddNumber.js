import { isInteger } from './isInteger.js';

const isOddNumber = (number) => isInteger(number) && number % 2 === 1;

export { isOddNumber as default, isOddNumber };
