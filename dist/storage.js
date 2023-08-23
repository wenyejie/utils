import { inBrowser } from './env.js';
import { emptyObject } from './emptyObject.js';
import globalThis from './globalThis.js';

const parse = (data) => {
  return (JSON.parse(data) || emptyObject).v;
};
class CustomStorage {
  storage;
  constructor(name) {
    this.storage = inBrowser() ? globalThis[`${name}Storage`] : emptyObject;
  }
  /**
   * 获取存储内容
   * @param key
   */
  get(key) {
    let result;
    try {
      result = parse(this.storage.getItem(key));
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
      this.storage.setItem(key, JSON.stringify({ v: value }));
    } catch (e) {
      throw new Error(e);
    }
  }
  /**
   * 移除存储值
   * @param key
   */
  remove(key) {
    this.storage.removeItem(key);
  }
  /**
   * 清空所有存储
   */
  clear() {
    this.storage.clear();
  }
  /**
   * 返回第index个存储的内容, index从0开始
   * @param index
   */
  key(index) {
    return parse(this.storage.key(index));
  }
  /**
   * 返回存储内容长度
   */
  length() {
    return this.storage.length;
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
