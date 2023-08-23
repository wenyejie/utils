const randomNumber = (max, min = 0) => {
  const cMax = Math.max(max, min);
  const cMin = Math.min(max, min);
  return Math.random() * (cMax - cMin) + cMin;
};

export { randomNumber as default, randomNumber };
