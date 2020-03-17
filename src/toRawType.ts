import toTypeString from './toTypeString'

// enum dataTypes {
//   date = 'date',
//   string = 'string',
//   number = 'number',
//   symbol = 'symbol',
// }

/**
 * 返回数据的类型
 * @param obj 返回类型的对象
 */
const toRawType = (obj: any): string =>
  toTypeString(obj)
    .slice(-8, -1)
    .toLocaleLowerCase()

export default toRawType
