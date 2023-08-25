const regArr = [
  /^[\da-z]{10,15}$/i,
  /^\d{6}[\da-z]{10,12}$/i,
  /^[a-z]\d{6}[\da-z]{9,11}$/i,
  /^[a-z]{2}\d{6}[\da-z]{8,10}$/i,
  /^\d{14}[\dx][\da-z]{4,5}$/i,
  /^\d{17}[\dx][\da-z]{1,2}$/i,
  /^[a-z]\d{14}[\dx][\da-z]{3,4}$/i,
  /^[a-z]\d{17}[\dx][\da-z]{0,1}$/i,
  /^\d{6}[\da-z]{13,14}$/i
];
const checkTaxpayerIDNO = (taxId) => {
  const j = regArr.length;
  for (let i = 0; i < j; i++) {
    if (regArr[i].test(taxId)) {
      return true;
    }
  }
  return false;
};

export { checkTaxpayerIDNO, checkTaxpayerIDNO as default };
