import useragent from './useragent'

export const isWeChat = useragent && useragent.includes('micromessenger')

export default isWeChat
