import globalThis from './globalThis.js';

class CustomStorage {
  storage;
  key;
  constructor(name, key = "v") {
    this.storage = globalThis[`${name}Storage`];
    this.key = key;
  }
  /**
   * 获取存储内容
   * @param key
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
   * @param key
   * @param value
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
  /**
   * 清空所有存储
   */
  clear() {
    this.storage?.clear();
  }
}
const localCustomStorage = new CustomStorage("local");
const sessionCustomStorage = new CustomStorage("session");
const storage = (customStorage) => {
  return (name, value) => {
    if (!name) {
      return;
    }
    switch (value) {
      case void 0:
        return customStorage.get(name);
      case null:
        customStorage.remove(name);
        break;
      default:
        customStorage.set(name, value);
        break;
    }
  };
};
const session = storage(sessionCustomStorage);
const local = storage(localCustomStorage);

export { local, localCustomStorage, session, sessionCustomStorage };
