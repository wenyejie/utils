import { isParentElement } from "./isParentElement.js";
const clickOutside = (element, callback, once) => {
  const docClick = (event) => {
    if (isParentElement(element, event == null ? void 0 : event.target)) {
      return;
    }
    callback();
  };
  document.addEventListener("click", docClick, { once });
  return () => {
    document.removeEventListener("click", docClick);
  };
};
export {
  clickOutside
};
