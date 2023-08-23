const dayStart = (date) => {
  date.setHours(0, 0, 0, 0);
  return date;
};
const dayEnd = (date) => {
  date.setHours(23, 59, 59, 999);
  return date;
};

export { dayEnd, dayStart };
