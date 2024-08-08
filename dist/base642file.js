import { globalThis as gt } from "./globalThis.js";
import { hasSuffix } from "./hasSuffix.js";
const base642file = (base64, filename) => {
  const array = base64.split(",");
  const type = array[0].match(/:(.*?);/)[1];
  const decodedData = gt.atob(array[1]);
  let length = decodedData.length;
  const uint8Array = new Uint8Array(length);
  while (length--) {
    uint8Array[length] = decodedData.charCodeAt(length);
  }
  filename = hasSuffix(filename) ? filename : `${filename}.${type.substring(6)}`;
  return new File([uint8Array], filename, { type });
};
export {
  base642file
};
