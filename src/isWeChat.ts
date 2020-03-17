import useragent from './useragent'

const isWeChat = useragent && useragent.includes('micromessenger')

export default isWeChat
