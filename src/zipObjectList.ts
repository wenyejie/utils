import { zipObject } from './zipObject'


/**
 * 根据属性和值列表生成数组
 * @param props
 * @param values
 */
export const zipObjectList = (props: PropertyKey[], values: any[][]) => values.map((value) => zipObject(props, value))
