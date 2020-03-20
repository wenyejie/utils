// 电话号码
export const reMobilePhone = /^1\d{10}$/

// 座机号码
export const reTelephone = /^(\d{3,4}-)?\d{7,8}$/

// 服务号码/联系方式 手机+座机
export const rePhone = /(^1\d{10}$)|(^(0\d{2,3}-?)?\d{7,8}(-\d{3,})?$)/

// 身份证号码
export const reIDCardNumber = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([012]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([012]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/

// 银行卡号
export const reBankCardNumber = /^\d{16,19}$/

// 中文名称
export const reChineseName = /^[\u4E00-\u9FA5|·]{2,}$/

// 邮箱地址
export const reEmail = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/

// url地址
export const reUrl = /^https?:\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?&?[a-zA-Z0-9_-](\?)?)*)*$/i

// 邮编
export const rePostcode = /^[1-9]\d{5}(?!\d)$/
