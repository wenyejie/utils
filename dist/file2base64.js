const n = (r) => new Promise((a, o) => {
  const e = new FileReader();
  e.onload = () => {
    a(e.result);
  }, e.onerror = o, e.readAsDataURL(r);
});
export {
  n as default,
  n as file2base64
};
