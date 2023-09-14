const e = (r) => Array.isArray(r) ? Array.from(new Set(r)) : (console.error(`"${r}" is not a array`), r);
export {
  e as default,
  e as unique
};
