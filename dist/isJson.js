const e = (t) => {
  try {
    return JSON.stringify(t) && !0;
  } catch {
    return !1;
  }
};
export {
  e as default,
  e as isJson
};
