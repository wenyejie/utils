import { isObject } from './isObject.js';
import { arrFindItemByProp } from './arrFindItemByProp.js';
import './toRawType.js';
import './toTypeString.js';
import './objectToString.js';
import './decapitalize.js';

const arrFindValByProp = (array, propKey, propValue, rtnPropKey) => {
  let props;
  if (isObject(propKey)) {
    props = propKey;
    rtnPropKey = propValue;
  } else {
    props = { [propKey]: propValue };
  }
  const item = arrFindItemByProp(array, props);
  return item?.[rtnPropKey];
};

export { arrFindValByProp, arrFindValByProp as default };
