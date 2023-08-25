import { isObject } from './isObject.js';
import './toRawType.js';
import './toTypeString.js';
import './objectToString.js';
import './decapitalize.js';

const arrFindItemByProp = (array, prop, value) => {
  const props = isObject(prop) ? prop : { [prop]: value };
  const propEntries = Object.entries(props);
  return array.find((item) => {
    for (const [prop2, value2] of propEntries) {
      if (item[prop2] !== value2) {
        return false;
      }
    }
    return true;
  });
};

export { arrFindItemByProp, arrFindItemByProp as default };
