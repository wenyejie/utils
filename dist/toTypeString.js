import { objectToString } from './objectToString.js';

const toTypeString = (obj) => {
  return objectToString.call(obj).toLocaleLowerCase();
};

export { toTypeString as default, toTypeString };
