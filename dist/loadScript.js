import { load } from "./load.js";
const loadScript = (url, options) => {
  return load("script", url, options);
};
export {
  loadScript
};
