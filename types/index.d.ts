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

export interface CardNOResponse {
  province?: string
  city?: string
  area?: string
  address?: string
  year?: string
  month?: string
  day?: string
  date?: string
  sex?: string
}
