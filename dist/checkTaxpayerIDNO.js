const a = [
  /^[\da-z]{10,15}$/i,
  /^\d{6}[\da-z]{10,12}$/i,
  /^[a-z]\d{6}[\da-z]{9,11}$/i,
  /^[a-z]{2}\d{6}[\da-z]{8,10}$/i,
  /^\d{14}[\dx][\da-z]{4,5}$/i,
  /^\d{17}[\dx][\da-z]{1,2}$/i,
  /^[a-z]\d{14}[\dx][\da-z]{3,4}$/i,
  /^[a-z]\d{17}[\dx][\da-z]{0,1}$/i,
  /^\d{6}[\da-z]{13,14}$/i
], t = (z) => {
  const e = a.length;
  for (let d = 0; d < e; d++)
    if (a[d].test(z))
      return !0;
  return !1;
};
export {
  t as checkTaxpayerIDNO,
  t as default
};
