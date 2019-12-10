// 电话号码
export const mobilePhone = /^1\d{10}$/

// 座机号码
export const telephone = /^(\d{3,4}-)?\d{7,8}$/

// 服务号码/联系方式 手机+座机
export const phone = /(^1\d{10}$)|(^(0\d{2,3}-?)?\d{7,8}(-\d{3,})?$)/

// 身份证号码
export const IDCardNumber = /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|31)|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}([0-9]|X)$/

// 中文名称
export const chineseName = /^[\u4E00-\u9FA5|·]{2,}$/

export default {
  phone,
  mobilePhone,
  telephone,
  IDCardNumber,
  chineseName
}
