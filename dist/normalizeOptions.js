import { toRawType } from "./toRawType.js";
const normalizeOptions = (options, defaultOptions, types) => {
  const type = toRawType(options);
  if (type === "undefined") {
    return { ...defaultOptions };
  }
  if (type === "object") {
    return { ...defaultOptions, ...options };
  }
  const innerOptions = { ...defaultOptions };
  if (toRawType(types) === "object") {
    innerOptions[types[type]] = options;
  } else {
    for (const [key, value] of Object.entries(defaultOptions)) {
      if (toRawType(value) === type) {
        innerOptions[key] = options;
        break;
      }
    }
  }
  return innerOptions;
};
export {
  normalizeOptions
};
