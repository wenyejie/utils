const arrDelItemByVal = (array, ...values) => {
  for (const value of values) {
    const index = array.indexOf(value);
    array.splice(index, 1);
  }
  return array;
};

export { arrDelItemByVal, arrDelItemByVal as default };
