const hyphenateRE = /\B([A-Z])/g;
const hyphenate = (str) => str.replace(hyphenateRE, "-$1").toLowerCase();
export {
  hyphenate
};
