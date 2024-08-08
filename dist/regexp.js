const rHttps = /^https/;
const rHttp = /^http/;
const rIOSDateStringFormat = /^\d{4}.\d{1,2}.\d{1,2}\s+(\d{1,2}.)*\d{1,2}?$/;
const rInteger = /^\d+$/;
const rMobilePhone = /^1\d{10}$/;
const rTelephone = /^(\d{3,4}-)?\d{7,8}$/;
const rPhone = /(^1\d{10}$)|(^(0\d{2,3}-?)?\d{7,8}(-\d{3,})?$)/;
const rIDCardNO = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([012]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([012]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;
const rBankCardNO = /^\d{16,19}$/;
const rChinese = /^[\u4E00-\u9FA5]+$/;
const rChineseName = /^[\u4E00-\u9FA5]{2,}(·[\u4E00-\u9FA5]{2,})*$/;
const rEmail = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
const rUrl = /^https?:\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?&?[a-zA-Z0-9_-](\?)?)*)*$/i;
const rEmoji = /[\uD83C\uD83D\uD83E][\uDC00-\uDFFF][\u200D|\uFE0F]|[\uD83C|\uD83D\uD83E][\uDC00-\uDFFF]|[0-9*#]\uFE0F\u20E3|[0-9#]\u20E3|[\u203C-\u3299]\uFE0F\u200D|[\u203C-\u3299]\uFE0F|[\u2122-\u2B55]|\u303D|[A9E]\u3030|uA9|uAE|\u3030/gi;
const rPostcode = /^[1-9]\d{5}(?!\d)$/;
const rAmount = /((^[1-9]\d*)|^0)(\.\d{1,2})?$/;
export {
  rAmount,
  rBankCardNO,
  rChinese,
  rChineseName,
  rEmail,
  rEmoji,
  rHttp,
  rHttps,
  rIDCardNO,
  rIOSDateStringFormat,
  rInteger,
  rMobilePhone,
  rPhone,
  rPostcode,
  rTelephone,
  rUrl
};
