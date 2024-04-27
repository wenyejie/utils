"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const checkTaxpayerIDNO = (taxId) => {
  return /[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}/.test(taxId);
};
exports.checkTaxpayerIDNO = checkTaxpayerIDNO;
