import { isString } from './isString'
import { isFunction } from './isFunction'
import { normalizeOptions } from './normalizeOptions'
import { AnyFn, PartialValueOf } from '../types'

// 选项
export interface IPublishSubscribeOptions {
  cache: boolean;
}

// 监听类型
export enum PublishSubscribeType {
  ON = 'on',
  ONCE = 'once'
}

// 实例化默认选项
const PublishSubscribeDefaultOptions: IPublishSubscribeOptions = {
  cache: false, // 缓存
};

// 监听默认选项
export interface PublishSubscribeOnOptions {
  type: PublishSubscribeType,
  immediate: boolean
}

// 回调队列子项
export interface PublishSubscribeQueuesItem {
  type: PublishSubscribeType,
  callback: AnyFn
}

// 消息MAP子项
export interface PublishSubscribeMessageItem {
  queues: PublishSubscribeQueuesItem[],
  result?: any
}

// 监听选项
const PublishSubscribeOnDefaultOptions: PublishSubscribeOnOptions = {
  type: PublishSubscribeType.ON, // 类型
  immediate: false, // 是否立即执行
};

/**
 * 发布订阅模式
 */
export class PublishSubscribe {
  #messages: Map<string, PublishSubscribeMessageItem> = new Map();
  #options: Partial<IPublishSubscribeOptions> = {};

  /**
   * 构造函数
   * @param options 选项
   */
  constructor(options?: PartialValueOf<IPublishSubscribeOptions>) {
    this.#options = normalizeOptions(options, PublishSubscribeDefaultOptions)
  }

  /**
   * 监听事件
   * @param name 事件名称
   * @param callback 事件回调
   * @param options 事件选项
   */
  on(name: string, callback: AnyFn, options?: PartialValueOf<PublishSubscribeOnOptions>) {
    if (!isString(name)) {
      console.warn('The parameter `name` must be a string:', name);
      return;
    }
    if (!isFunction(callback)) {
      console.warn('The parameter `callback` must be a function:', callback);
      return;
    }
    const {
      type,
      immediate
    } = normalizeOptions(options, PublishSubscribeOnDefaultOptions);
    if (!this.#messages.has(name)) {
      this.#messages.set(name, { queues: [] });
    }
    const message = this.#messages.get(name);

    const { result, queues } = message;

    if (queues.find(item => item.callback === callback)) {
      console.log(`The callback: ${ callback } already exists under name: ${ name }`);
      return;
    }

    queues.push({
      type,
      callback
    });

    if (immediate && result?.length > 0) {
      callback(...result);
    }
  }

  /**
   * 监听
   * @param name
   * @param callback
   * @param immediate
   */
  once(name: string, callback:AnyFn, immediate: PublishSubscribeOnOptions['immediate'] = false) {
    this.on(name, callback, { type: PublishSubscribeType.ONCE, immediate });
  }

  /**
   * 解除订阅
   * @param name
   * @param callback
   */
  off(name: string | null, callback: AnyFn | null) {
    if (name === null) {
      this.#messages.clear();
      return;
    }
    if (!this.#messages.has(name)) {
      console.warn('No callback for this event `name`:', name);
      return;
    }
    // 释放所有
    if (callback === null) {
      this.#messages.delete(name);
      return;
    }

    if (!isFunction(callback)) {
      console.warn('The parameter `callback` must be a function:', callback);
      return;
    }

    const message = this.#messages.get(name);
    message.queues = message.queues.filter(item => item.callback !== callback);
  }

  /**
   * 触发事件
   * @param name
   * @param args
   */
  emit(name: string, ...args: any[]) {
    if (!isString(name)) {
      console.warn('The parameter `name` must be a string:', name);
      return;
    }
    const message = this.#messages.get(name) ?? { queues: [] };
    const { queues } = message;
    if (queues.length > 0) {
      queues.forEach(({ callback }) => callback(...args));
      message.queues = queues.filter(({ type }) => type !== 'once');
    }
    // 没有监听回调
    else {
      console.warn('No callback for this event `name`:', name);
    }

    if (this.#options.cache) {
      message.result = args;
    }

    this.#messages.set(name, message);
  }

}
