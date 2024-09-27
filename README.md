# utils

> 工具类

## 引用注意项

> 项目本身不做babel转义, 如果要做转移请自行配置

```javascript
// vue.config.js
transpileDependencies: ['wenyejie']

// vite.config.js
optimizeDeps: {
  include: [ 'wenyejie' ],
},
```

## change log

[详见 CHANGELOG.md](./CHANGELOG.md)

## exports

- Browser `Es modules`
- Node `commonjs`

## Tree-Shaking

支持 tree-shaking

建议不要整包引入, 请按需引入, 请配合`tree shaking`一起使用

## error rules

- 当代码无法执行而return时, 如果是参数错误或者其它原因需要`console.error`/`throw`, 如果不这么做, 代码执行没有预期发生时会很懵逼,
  无法定位问题
- 如果代码本身可以抛出错误, 那么不必`console.error`/`throw`(PS: 因为代码中报错信息太多可能不那么美观???),
  前提是抛出的错误要和预期一样, 对后续代码的影响在预料之中
- 如果程序本身无法对某些代码或者逻辑报错, 那么一定要主动输入错误

## 因为当前包不做babel转义, 所以引用当前包要做转义

```javascript
// vue.config.js
module.exports = {
  transpileDependencies: [ 'wenyejie' ], // 添加你需要编译的依赖包名称
}
```

## Prettier

program: $ProjectFileDir$/node_modules/.bin/prettier

arguments: --write $FilePathRelativeToProjectRoot$

output: $FilePathRelativeToProjectRoot$

## 版本号

版本格式：主版本号.次版本号.修订号，版本号递增规则如下：

主版本号：当你做了不兼容的 API 修改，
次版本号：当你做了向下兼容的功能性新增，
修订号：当你做了向下兼容的问题修正。
先行版本号及版本编译信息可以加到“主版本号.次版本号.修订号”的后面，作为延伸。
