import globalThis from './globalThis.js';

const base642file = (base64, filename) => {
  const array = base64.split(",");
  const type = array[0].match(/:(.*?);/)[1];
  const decodedData = globalThis.atob(array[1]);
  let length = decodedData.length;
  const uint8Array = new Uint8Array(length);
  while (length--) {
    uint8Array[length] = decodedData.charCodeAt(length);
  }
  return new File([uint8Array], filename + "." + type.substring(6), { type });
};

export { base642file, base642file as default };
