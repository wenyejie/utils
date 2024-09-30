# 版本记录

## 2.7.0 `div`
- 优化`exactMath`方法
- 新增`toFloor`, `toCeil`方法

## 2.6.1 `prod`
- 提取封装`PLACEHOLDER`
- `once`方法带上移除功能，通过参数控制
- `temporary`方法带上移除功能，通过参数控制，优化传参

## 2.6.0 `prod`
- 新增`temporary`临时缓存功能
- 优化`once`别名:`cacheOne`: 不适用假值为判断条件, 使用`symbol`

## 2.5.0 `prod`
- 优化`normalizeOptions` `options`参数, 允许为`undefined`
- 新增`monthStart`, `monthEnd`方法
- 优化`moneyFormat`, 并且也可以使用`numberFormat`来调用

## 2.4.0 `prod`

- 优化`debounce`, `throttle` 等函数的选项规范化
- add `partial`, `zip`, `zipObject`, `zipObjectList`, `beforeHook`, `afterHook` 方法
- `hasOwn` 重构, 改用系统自带`Object.hasOwn`
- `countdown` 重构, 移除自带事件分发, 改用`PublishSubscribe`

## 2.3.0 `prod`

- 修复并调整`intervalExec`会缓存Promise值的bug, 加入识别Promise返回值的功能, 加入参数`abort`, `rtnVal`
- 新增`retryIncorrect`
- `dateFormat` 新增识别`[]`内容使其不格式化
- add `normalizeOptions` 序列化选项

## 2.2.2

- 修复ts文档声明

## 2.2.0

- 新增`intervalExec`方法
- `countdown`新增参数`immediate`
- `datetimeSpan`
  - 新增参数`padStart`
  - 修改默认参数`types` ~~`['year', 'week', 'day', 'hour', 'minute', 'second']`~~ -> **`['day',
    'hour', 'minute', 'second']`**
- `setOnInterval`新增准时定时器

## 2.1.2

- 调整相关引用由`@/`改为`./`
- 更新相关引用
- 修复`ban.test.ts`, `swap.test.ts`, `getInfoByCardNO.test.ts`的方法调用错误

## 2.1.1

- add `isVoid`
- fix `clone` 无法复制循环对象的bug

## 2.1.0

- 新增`hasFocus`
- 优化精简`load`
- 导出`StorageFn`
- 重构`imageCompress`

## 2.0.6

- 新增`hasSuffix`方法
- `base642file`新增是否有后缀判断, 如果有则不自动加入后缀
- `calcTextareaHeight`新增计算`textarea`高度方法

## 2.0.5

- 新增`clickOutside`方法
- 新增`isParentElement`方法

## 2.0.0 `online`

- 使用`vite`重构
- 使用`typescript`重构
- 重构`catchRequest`
- 重构`countdown`

## 1.22.2 `online`

- 优化type文件
- 所有引用文件加上后缀`.js`
- 新增`getTsByStr`获取跟进字符串时间戳
- 新增`isNumberString`判断是否为数字的字符串即: '111', '123.11'
- 新增`toMultiKeyOneValue`方法生成一个多key一值的键值对数据

## 1.22.1 `online`

- 优化type文件
- 优化`timeDistance`方法, 给予`compare`默认参数

## 1.21.0 `online`

- 优化`moneyFormat`, 新增是否尾部填充功能
- 新增`dayStart`, `dayEnd`, `arrUpItem`, `isTrulyArrInx`, `arrDownItem`, `arrDelItem`

## 1.20.0 `online`

- 移除`isSameDay`, `isSameMonth`, `isSameYear`的第二个参数的默认值
- dateFormat 加入毫秒`S`, `SS`, `SSS`
- 继续完善`ts`
- 新增`isInvalidDate`方法
- 移除dateFormat中的`padStart`函数, 改用全局方法
- 新增`isSafari`
- 完善`moneyFormat`的ts声明

## 1.19.5

## 1.19.4

## 1.19.3

## 1.19.2

- 完善`ts`

## 1.19.1

- 新增`freezeObj`方法
- 完善`ts`

## 1.18.5

- 新增`padStart`方法
- 新增`padEnd`方法
- 新增`dateObj`方法
- 新增`percentage`方法
- 新增`datetimeSpan`方法
- 调整`exactMath`方法
- 新增`decimalLength`方法
- 新增`spliceString`方法

## 1.8.4

- 新增`monthRange`方法

## 1.16

- 新增 `isMap`, `isSet`, `isWeakMap`, `isWeakSet`, `removeSpace`, `toNumber` 方法

## 1.15

- 新增 `countdown`方法
- 新增 `phoneNumFormat`方法

## 1.1.12

- 新增`camelize`方法
- 新增`capitalize`方法
- 新增`css`方法 `{ get, set, support }`
- 新增`hyphenate`方法
- 新增`isDefined`方法
- 新增`isJson`方法
- 新增`isJsonString`方法
- 新增`isUndefined`方法

## v1.01

新增 typescript `d.ts`声明
