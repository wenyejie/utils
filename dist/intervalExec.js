import { globalThis as gt } from "./globalThis.js";
import { isPromise } from "./isPromise.js";
import { normalizeOptions } from "./normalizeOptions.js";
const DEFAULT_OPTIONS = {
  timeout: 300,
  immediate: true,
  rtnVal: null,
  abort: -1
};
const intervalExecTypes = {
  "number": "timeout",
  "boolean": "immediate"
};
const intervalExec = (execute, options) => {
  const { timeout, immediate, rtnVal, abort } = normalizeOptions(options, intervalExecTypes, DEFAULT_OPTIONS);
  return (...args) => {
    const { resolve, promise } = Promise.withResolvers();
    let innerAbort = abort;
    let timer = 0;
    const intervalExecLoop = async () => {
      if (innerAbort >= 0) {
        if (innerAbort > 0) {
          innerAbort--;
        } else {
          clearInterval(timer);
          resolve(rtnVal);
          return;
        }
      }
      let result = execute(...args);
      if (isPromise(result)) {
        try {
          result = await result;
        } catch (error) {
          console.error("intervalExec promise error", error);
          result = rtnVal;
        }
      }
      if (result) {
        clearInterval(timer);
        resolve(result);
      }
    };
    timer = gt.setInterval(intervalExecLoop, timeout);
    if (immediate) {
      intervalExecLoop();
    }
    return promise;
  };
};
export {
  intervalExec
};
