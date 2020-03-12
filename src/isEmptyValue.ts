/**
 * 判断一个值是否为空值
 * @param value
 */
const isEmptyValue = (value: undefined | null | string | number | any[]) => {
  return value === undefined ||
    value === null ||
    value === '' ||
    Number.isNaN(<number>value) ||
    (Array.isArray(value) && value.length === 0)
}
export default isEmptyValue
