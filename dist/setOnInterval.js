import { globalThis as gt } from "./globalThis.js";
const setOnInterval = (handle, timeout) => {
  let time = Date.now() + timeout;
  let nextTime = timeout;
  return gt.setInterval(() => {
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
export {
  setOnInterval
};
