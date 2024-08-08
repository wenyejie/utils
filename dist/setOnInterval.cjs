"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const globalThis = require("./globalThis.cjs");
const setOnInterval = (handle, timeout) => {
  let time = Date.now() + timeout;
  let nextTime = timeout;
  return globalThis.globalThis.setInterval(() => {
    handle();
    nextTime = Date.now() - time;
    time += timeout;
    while (nextTime > timeout) {
      handle();
      nextTime -= timeout;
      time += timeout;
    }
  }, nextTime);
};
exports.setOnInterval = setOnInterval;
