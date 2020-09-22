const camelizeRE = /-(\w)/g

// 把横杠命名转化为驼峰命名
export const camelize = str => {
  return str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : ''))
}

export default camelize
