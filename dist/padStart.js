import { isUndefined } from './isUndefined.js';

const padStart = (obj, maxLength = 2, fillString = "0") => {
  if (isUndefined(obj) || Number.isNaN(obj)) {
    obj = "";
  }
  return `${obj}`.padStart(maxLength, fillString);
};

export { padStart as default, padStart };
