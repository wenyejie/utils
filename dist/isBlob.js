import { toRawType as t } from "./toRawType.js";
const b = (o) => t(o) === "blob";
export {
  b as default,
  b as isBlob
};
