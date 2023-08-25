const dayEnd = (date) => {
  date.setHours(23, 59, 59, 999);
  return date;
};

export { dayEnd, dayEnd as default };
