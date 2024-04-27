import { toRawType } from "./toRawType.js";
const isPlainDate = (obj) => toRawType(obj) === "date";
export {
  isPlainDate
};
