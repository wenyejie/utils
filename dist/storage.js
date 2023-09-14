class i {
  storage;
  key;
  constructor(e, t = "v") {
    this.storage = e, this.key = t;
  }
  /**
   * 获取存储内容
   * @param key 保存key
   */
  get(e) {
    let t;
    try {
      t = JSON.parse(this.storage?.getItem(e))?.[this.key];
    } catch (r) {
      throw new Error(r);
    }
    return t;
  }
  /**
   * 保存键值到存储空间
   * @param key key
   * @param value value
   */
  set(e, t) {
    try {
      this.storage?.setItem(e, JSON.stringify({ [this.key]: t }));
    } catch (r) {
      throw new Error(r);
    }
  }
  /**
   * 移除存储值
   * @param key
   */
  remove(e) {
    this.storage?.removeItem(e);
  }
}
const a = (s, e) => {
  const t = new i(s, e);
  return (r, o) => {
    if (!r) {
      console.error(`"${r}" is required`);
      return;
    }
    switch (o) {
      case void 0:
        return t.get(r);
      case null:
        t.remove(r);
        break;
      default:
        t.set(r, o);
        break;
    }
  };
};
export {
  a as default,
  a as storage
};
