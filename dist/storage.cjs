'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

class CustomStorage {
  storage;
  key;
  constructor(storage2, key = "v") {
    this.storage = storage2;
    this.key = key;
  }
  /**
   * 获取存储内容
   * @param key 保存key
   */
  get(key) {
    let result;
    try {
      result = JSON.parse(this.storage?.getItem(key))?.[this.key];
    } catch (e) {
      throw new Error(e);
    }
    return result;
  }
  /**
   * 保存键值到存储空间
   * @param key key
   * @param value value
   */
  set(key, value) {
    try {
      this.storage?.setItem(key, JSON.stringify({ [this.key]: value }));
    } catch (e) {
      throw new Error(e);
    }
  }
  /**
   * 移除存储值
   * @param key
   */
  remove(key) {
    this.storage?.removeItem(key);
  }
}
const storage = (storage2, key) => {
  const instance = new CustomStorage(storage2, key);
  return (name, value) => {
    if (!name) {
      return;
    }
    switch (value) {
      case void 0:
        return instance.get(name);
      case null:
        instance.remove(name);
        break;
      default:
        instance.set(name, value);
        break;
    }
  };
};

exports.default = storage;
exports.storage = storage;
