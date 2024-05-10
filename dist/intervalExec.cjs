"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const globalThis = require("./globalThis.cjs");
const isPromise = require("./isPromise.cjs");
const normalizeOptions = require("./normalizeOptions.cjs");
const DEFAULT_OPTIONS = {
  timeout: 300,
  immediate: true,
  rtnVal: null,
  abort: -1
};
const intervalExec = (execute, options) => {
  const { timeout, immediate, rtnVal, abort } = normalizeOptions.normalizeOptions(options, DEFAULT_OPTIONS);
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
      if (isPromise.isPromise(result)) {
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
    timer = globalThis.globalThis.setInterval(intervalExecLoop, timeout);
    if (immediate) {
      intervalExecLoop();
    }
    return promise;
  };
};
exports.intervalExec = intervalExec;
