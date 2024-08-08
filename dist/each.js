import { isObject } from "./isObject.js";
const each = (data, fn) => {
  if (!Array.isArray(data) && !isObject(data)) {
    console.error(`"${data}" is not array or object`);
    return;
  }
  if (Array.isArray(data)) {
    for (let i = 0; i < data.length; i++) {
      if (fn(data[i], i, data) === false) {
        break;
      }
    }
  } else {
    for (const [key, value] of Object.entries(data)) {
      if (fn(value, key, data) === false) {
        break;
      }
    }
  }
};
export {
  each
};
