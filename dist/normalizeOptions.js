import { toRawType } from "./toRawType.js";
const normalizeOptions = (options, types, defaultOptions) => {
  const type = toRawType(options);
  if (type === "undefined") {
    return { ...defaultOptions };
  }
  if (type === "object") {
    return { ...options };
  }
  const innerOptions = { ...defaultOptions };
  innerOptions[types[type]] = options;
  return innerOptions;
};
export {
  normalizeOptions
};
