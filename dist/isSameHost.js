import { isString } from './isString.js';
import globalThis from './globalThis.js';
import './toRawType.js';
import './toTypeString.js';
import './objectToString.js';
import './decapitalize.js';

const isSameHost = (urlA, urlB = globalThis.location.href) => {
  if (!isString(urlA)) {
    return false;
  }
  const $a = document.createElement("a");
  $a.href = urlA;
  const $b = document.createElement("a");
  $b.href = urlB;
  return $a.host === $b.host;
};

export { isSameHost as default, isSameHost };
