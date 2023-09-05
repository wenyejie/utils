import { load, LoadOptions } from './load'

/**
 * 载入script
 * @param url url地址
 * @param options 选项
 */
export const loadScript = (url: string, options: LoadOptions) => {
  return load('script', url, options) as Promise<HTMLScriptElement>
}

export default loadScript
