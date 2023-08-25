const decapitalize = (str) => {
  return str.charAt(0).toLowerCase() + str.slice(1);
};

export { decapitalize, decapitalize as default };
