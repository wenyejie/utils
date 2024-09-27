"use strict";
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
class CustomStorage {
  constructor(storage2, key = "v") {
    __publicField(this, "storage");
    __publicField(this, "key");
    this.storage = storage2;
    this.key = key;
  }
  /**
   * 获取存储内容
   * @param key 保存key
   */
  get(key) {
    var _a, _b;
    let result;
    try {
      result = (_b = JSON.parse((_a = this.storage) == null ? void 0 : _a.getItem(key))) == null ? void 0 : _b[this.key];
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
    var _a;
    try {
      (_a = this.storage) == null ? void 0 : _a.setItem(key, JSON.stringify({ [this.key]: value }));
    } catch (e) {
      throw new Error(e);
    }
  }
  /**
   * 移除存储值
   * @param key
   */
  remove(key) {
    var _a;
    (_a = this.storage) == null ? void 0 : _a.removeItem(key);
  }
}
const storage = (storage2, key) => {
  const instance = new CustomStorage(storage2, key);
  return (name, value) => {
    if (!name) {
      console.error(`"${name}" is required`);
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
exports.storage = storage;
