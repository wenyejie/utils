# utils

> 工具类

## change log

[详见 CHANGELOG.md](./CHANGELOG.md)

## utils 使用方法, 支持 tree-shaking

建议不要整包引入, 请按需引入, 请配合`tree shaking`一起使用

## `wenyejie.ts` 为 `NodeJs` 自动生成请不要手动修改

当然修改了也没用, 每次打包它都会被重新生成写入

## issue

~~有些正则使用了, 后视断言, 所以不支持相关浏览器, [详见](https://caniuse.com/#feat=mdn-javascript_builtins_regexp_lookbehind_assertion)
所以不要整包引入, 而是按需引入, 并使用 tree-shaking~~

~~使用`dev`模式下, `webpack`会整包引入, 所以不要担心.~~

已移出相关兼容性 `bug` 的后视断言
