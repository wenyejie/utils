const hasFocus = (element) => {
  return document.hasFocus() && document.activeElement === element;
};
export {
  hasFocus
};
