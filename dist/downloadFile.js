import { isString } from "./isString.js";
const downloadFile = (url, filename = "") => {
  if (!isString(url)) {
    console.error(`"${url}" is not a string`);
    return;
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
export {
  downloadFile
};
