import useragent from './useragent'

export const isWeChat = () => useragent().includes('micromessenger')

export default isWeChat
