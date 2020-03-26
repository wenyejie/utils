// 电话号码
export const rMobilePhone = /^1\d{10}$/

// 座机号码
export const rTelephone = /^(\d{3,4}-)?\d{7,8}$/

// 服务号码/联系方式 手机+座机
export const rPhone = /(^1\d{10}$)|(^(0\d{2,3}-?)?\d{7,8}(-\d{3,})?$)/

// 身份证号码
export const rIDCardNumber = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([012]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([012]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/

// 银行卡号
export const rBankCardNumber = /^\d{16,19}$/

// 中文名称
export const rChineseName = /^[\u4E00-\u9FA5|·]{2,}$/

// 邮箱地址
export const rEmail = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/

// url地址
export const rUrl = /^https?:\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?&?[a-zA-Z0-9_-](\?)?)*)*$/i

// 邮编
export const rPostcode = /^[1-9]\d{5}(?!\d)$/