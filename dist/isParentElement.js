import { isElement } from "./isElement.js";
const isParentElement = (parent, child, selfParent = true) => {
  if (!isElement(parent)) {
    console.error(`"${parent}" is not a HTMLElement`);
    return false;
  }
  if (!isElement(child)) {
    console.error(`"${child}" is not a HTMLElement`);
    return false;
  }
  if (!selfParent) {
    child = child.parentElement;
  }
  while (child !== null) {
    if (child === parent) {
      return true;
    }
    child = child.parentElement;
  }
  return false;
};
export {
  isParentElement
};
