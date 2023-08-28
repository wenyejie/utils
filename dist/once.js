const n = (e) => {
  let t;
  return function() {
    return t || (t = e.apply(this, arguments));
  };
};
export {
  n as default,
  n as once
};
