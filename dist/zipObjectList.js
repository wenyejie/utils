import { zipObject } from "./zipObject.js";
const zipObjectList = (props, values) => values.map((value) => zipObject(props, value));
export {
  zipObjectList
};
