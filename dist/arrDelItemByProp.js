import { isObject } from './isObject.js';
import './toRawType.js';
import './toTypeString.js';
import './objectToString.js';
import './decapitalize.js';

const arrDelItemByProp = (array, propKey, propValue) => {
  const propObj = isObject(propKey) ? propKey : { [propKey]: propValue };
  const propEntries = Object.entries(propObj);
  const index = array.findIndex((item) => {
    for (const [key, value] of propEntries) {
      if (item[key] !== value) {
        return false;
      }
    }
    return true;
  });
  if (index >= 0) {
    array.splice(index, 1);
  }
  return array;
};

export { arrDelItemByProp, arrDelItemByProp as default };
