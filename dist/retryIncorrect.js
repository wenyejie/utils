import { isPromise } from "./isPromise.js";
import { normalizeOptions } from "./normalizeOptions.js";
const RETRY_INCORRECT_DEFAULT_OPTIONS = {
  retry: 5,
  // 重试次数
  base: 2,
  rtnVal: null,
  check: (result) => {
    if (result == null ? void 0 : result.error) {
      return false;
    }
    return result;
  }
};
const RETRY_INCORRECT_TYPES = {
  "number": "retry",
  "function": "check"
};
const retryIncorrect = (execute, options) => {
  const { retry, base, rtnVal, check } = normalizeOptions(options, RETRY_INCORRECT_TYPES, RETRY_INCORRECT_DEFAULT_OPTIONS);
  const { resolve, promise } = Promise.withResolvers();
  let timer = 0;
  let retryCount = 0;
  let timeout = 0;
  const retryIncorrectLoop = async () => {
    let result = execute();
    if (isPromise(result)) {
      try {
        result = await result;
      } catch (error) {
        console.error("retryIncorrect promise error", error);
        result = rtnVal;
      }
    }
    if (check(result) || retryCount >= retry) {
      clearTimeout(timer);
      resolve(result);
    } else {
      timeout = Math.pow(base, retryCount) - 0.5;
      setTimeout(retryIncorrectLoop, timeout * 1e3);
      retryCount++;
    }
  };
  retryIncorrectLoop();
  return promise;
};
export {
  retryIncorrect
};
