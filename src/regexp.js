// 电话号码
export const mobilePhone = /^1\d{10}$/

// 座机号码
export const telephone = /^(\d{3,4}-)?\d{7,8}$/

// 服务号码/联系方式 手机+座机
export const phone = /(^1\d{10}$)|(^(0\d{2,3}-?)?\d{7,8}(-\d{3,})?$)/

// 身份证号码
export const IDCardNumber = /^[1-9]\d{7}((0\d)|(1[0-2]))(([012]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([012]\d)|3[0-1])\d{3}([0-9]|X)$/

// 中文名称
export const chineseName = /^[\u4E00-\u9FA5|·]{2,}$/

export default {
  phone,
  mobilePhone,
  telephone,
  IDCardNumber,
  chineseName
}
