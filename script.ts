import load from './load'
/**
 * 载入script
 * @param url
 * @param options
 */
export const script = (url: string, options: Record<any, any>) => {
  return load('script', url, options)
}

export default script
