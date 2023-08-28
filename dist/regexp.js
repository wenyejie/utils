const u = /^https/, t = /^http/, d = /^\d{4}.\d{1,2}.\d{1,2}\s+(\d{1,2}.)*\d{1,2}?$/, o = /^\d+$/, n = /^1\d{10}$/, r = /^(\d{3,4}-)?\d{7,8}$/, s = /(^1\d{10}$)|(^(0\d{2,3}-?)?\d{7,8}(-\d{3,})?$)/, F = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([012]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([012]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/, c = /^\d{16,19}$/, D = /^[\u4E00-\u9FA5]+$/, e = /^[\u4E00-\u9FA5]{2,}(·[\u4E00-\u9FA5]{2,})*$/, E = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/, $ = /^https?:\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?&?[a-zA-Z0-9_-](\?)?)*)*$/i, C = /[\uD83C\uD83D\uD83E][\uDC00-\uDFFF][\u200D|\uFE0F]|[\uD83C|\uD83D\uD83E][\uDC00-\uDFFF]|[0-9*#]\uFE0F\u20E3|[0-9#]\u20E3|[\u203C-\u3299]\uFE0F\u200D|[\u203C-\u3299]\uFE0F|[\u2122-\u2B55]|\u303D|[A9E]\u3030|uA9|uAE|\u3030/gi, a = /^[1-9]\d{5}(?!\d)$/, A = /((^[1-9]\d*)|^0)(\.\d{1,2})?$/;
export {
  A as rAmount,
  c as rBankCardNO,
  D as rChinese,
  e as rChineseName,
  E as rEmail,
  C as rEmoji,
  t as rHttp,
  u as rHttps,
  F as rIDCardNO,
  d as rIOSDateStringFormat,
  o as rInteger,
  n as rMobilePhone,
  s as rPhone,
  a as rPostcode,
  r as rTelephone,
  $ as rUrl
};
