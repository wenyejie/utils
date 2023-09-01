import isString from './isString'
import isNumber from './isNumber'
import isNumberString from './isNumberString'
import toMultiKeyOneValue from './toMultiKeyOneValue'

/**
 * 字符串键值对(毫秒级)
 * 因为月份天数相差巨大, 这里不做预设
 * 1s = 1000 1e3  = 1 * 1000
 * 1m = 60000 6e4 = 60 * 1000
 * 1h = 3600000 36e5 = 60000 * 60
 * 1d = 86400000 864e5 = 3600000 * 24
 * 1w(7d) = 604800000 6048e5 = 86400000 * 7
 * 1y(365d) = 31536000000 31536e6 = 86400000 365
 */
const strMap = toMultiKeyOneValue([
  [['s', 'sec', 'second'], 1e3],
  [['m', 'min', 'minute'], 6e4],
  [['h', 'hour'], 36e5],
  [['d', 'day'], 864e5],
  [['w', 'week'], 6048e5],
  [['y', 'year'], 31536e6],
])

// 时间单位正则
const rTsStr = /^(?<num>\d+(\.\d+)?)(?<unit>s(ec(ond)?)?|m(in(ute)?)?|h(our)?|d(ay)?|w(eek)?|y(ear)?)$/i

/**
 * 跟进字符串获取时间戳;默认返回毫秒级时间戳
 *
 * @param str 1d, 1m, 1h, 1w, 1y
 * @param rtnType 返回类型
 */
export const getTsByStr = (str: string | number, rtnType: 'second' | 'millisecond' = 'millisecond') => {
  if (!isNumber(str) && !isString(str)) {
    // 当参数即不是正常的数字也不是正常的字符串返回错误
    console.error(`${str} is not a number or string`)
    return null
  }
  if (isNumber(str)) {
    // 如果是number类型则直接返回
    return <number>str
  }
  str = (<string>str).trim()
  if (isNumberString(str)) {
    return Math.floor(+str)
  }
  const result = str.match(rTsStr)
  if (!result) {
    console.error(`getTsByStr: Incorrect timestamp string parameter => ${str}`)
    return null
  }
  let { num, unit } = result.groups
  const rtnValue = +num * <number>strMap[unit.toLowerCase()]
  if (rtnType === 'second') {
    return Math.floor(rtnValue / 1e3) // 此处不允许出现小数, 时间戳只能是小数, 如果需要毫秒级时间戳, 请变更rtnType
  }
  return Math.floor(rtnValue) // 时间戳不能为小数
}

export default getTsByStr
