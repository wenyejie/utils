const isJson = (obj) => {
  try {
    return JSON.stringify(obj) && true;
  } catch (e) {
    return false;
  }
};
export {
  isJson
};
