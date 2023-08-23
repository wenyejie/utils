const hyphenateRE = /\B([A-Z])/g;
const hyphenate = (str) => {
  return str.replace(hyphenateRE, "-$1").toLowerCase();
};

export { hyphenate as default, hyphenate };
