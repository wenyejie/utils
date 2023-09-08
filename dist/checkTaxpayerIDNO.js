const t = (e) => /[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}/.test(e);
export {
  t as checkTaxpayerIDNO,
  t as default
};
