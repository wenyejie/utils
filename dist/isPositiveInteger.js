import { isInteger } from './isInteger.js';

const isPositiveInteger = (obj) => isInteger(obj) && obj > 0;

export { isPositiveInteger as default, isPositiveInteger };
