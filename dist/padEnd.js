import { isUndefined } from './isUndefined.js';

const padEnd = (obj, maxLength = 2, fillString = "0") => {
  if (isUndefined(obj) || Number.isNaN(obj)) {
    obj = "";
  }
  return `${obj}`.padEnd(maxLength, fillString);
};

export { padEnd as default, padEnd };
