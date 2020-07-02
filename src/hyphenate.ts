const hyphenateRE = /\B([A-Z])/g

// 驼峰命名转横杠命名
export const hyphenate = (str: string) => {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
}

export default hyphenate
