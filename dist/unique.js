const unique = (array) => {
  if (!Array.isArray(array)) {
    console.error(`"${array}" is not a array`);
    return array;
  }
  return Array.from(new Set(array));
};
export {
  unique
};
