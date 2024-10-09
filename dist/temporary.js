import { once } from "./once.js";
import { normalizeOptions } from "./normalizeOptions.js";
const TEMPORARY_DEFAULT_OPTIONS = {
  timeout: 500,
  needRemove: false
};
const temporary = (fn, options) => once(fn, normalizeOptions(options, TEMPORARY_DEFAULT_OPTIONS));
export {
  temporary
};
