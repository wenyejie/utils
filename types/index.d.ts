export const enum DOMNodeTypes {
  ELEMENT = 1,
  TEXT = 3,
  COMMENT = 8
}

export interface MoneyFormatOptions {
  decimal?: number
  symbol?: string
  default?: string
  split?: string
  length?: number
}
