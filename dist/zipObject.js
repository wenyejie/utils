const zipObject = (props, values) => {
  const result = {};
  for (const [index, key] of props.entries()) {
    result[key] = values[index];
  }
  return result;
};
export {
  zipObject
};
