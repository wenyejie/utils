import { isString } from './isString.js';
import './toRawType.js';
import './toTypeString.js';
import './objectToString.js';

const downloadFile = (url, filename = "") => {
  if (!isString(url)) {
    throw new Error(`参数错误: ${url}`);
  }
  const $download = document.createElement("a");
  $download.style.display = "none";
  $download.href = url;
  $download.setAttribute("download", filename);
  if (!$download.download) {
    $download.setAttribute("target", "_blank");
  }
  document.body.appendChild($download);
  $download.click();
  document.body.removeChild($download);
};

export { downloadFile as default, downloadFile };
