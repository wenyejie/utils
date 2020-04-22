// 电话号码
export const rMobilePhone = /^1\d{10}$/

// 座机号码
export const rTelephone = /^(\d{3,4}-)?\d{7,8}$/

// 服务号码/联系方式 手机+座机
export const rPhone = /(^1\d{10}$)|(^(0\d{2,3}-?)?\d{7,8}(-\d{3,})?$)/

// 身份证号码
export const rIDCardNO = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([012]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([012]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/

// 银行卡号
export const rBankCardNO = /^\d{16,19}$/

// 中文名称
export const rChineseName = /^[\u4E00-\u9FA5]{2,}(·[\u4E00-\u9FA5]{2,})*$/

// 邮箱地址
export const rEmail = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/

// url地址
export const rUrl = /^https?:\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?&?[a-zA-Z0-9_-](\?)?)*)*$/i

// emoji表情
export const rEmoji = /[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF][\u200D|\uFE0F]|[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF]|[0-9|*|#]\uFE0F\u20E3|[0-9|#]\u20E3|[\u203C-\u3299]\uFE0F\u200D|[\u203C-\u3299]\uFE0F|[\u2122-\u2B55]|\u303D|[A9|AE]\u3030|uA9|uAE|\u3030/gi

// 邮编
export const rPostcode = /^[1-9]\d{5}(?!\d)$/

// 金额
export const rAmount = /((^[1-9]\d*)|^0)(\.\d{1,2})?$/

/**
 * 限制金额输入, 即匹配到不合法的金额输入
 * 如: 00.11 -> 0.11, 011.11 -> 11.11, 11.110 -> 11.11
 * 推荐用法, amount.replace(rLimitAmount, '')
 * 当然可以以此来校验输入是否符合金额规则, !rLimitAmount.test(amount)
 */
export const rLimitAmount = /([^0-9.])|((?<=\d+\.\d{2})\d+)|((?<=^0)0+)|(^0(?=[1-9]))|((?<=\.\d*)\.)|(^\.)/g
