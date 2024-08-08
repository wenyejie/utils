import { isObject } from "./isObject.js";
import { arrFindItemByProp } from "./arrFindItemByProp.js";
const arrFindValByProp = (array, propKey, propValue, rtnPropKey) => {
  let props;
  if (isObject(propKey)) {
    props = propKey;
    rtnPropKey = propValue;
  } else {
    props = { [propKey]: propValue };
  }
  const item = arrFindItemByProp(array, props);
  return item == null ? void 0 : item[rtnPropKey];
};
export {
  arrFindValByProp
};
