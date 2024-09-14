const swap = (obj, i, j) => {
  if (!Object.hasOwn(obj, i) || !Object.hasOwn(obj, j)) {
    return obj;
  }
  const temp = obj[i];
  obj[i] = obj[j];
  obj[j] = temp;
  return obj;
};
export {
  swap
};
