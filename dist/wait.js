const wait = (time = 300) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};
export {
  wait
};