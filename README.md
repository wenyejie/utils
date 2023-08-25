# utils

> 工具类

## change log

[详见 CHANGELOG.md](./CHANGELOG.md)

## utils 使用方法, 支持 tree-shaking

建议不要整包引入, 请按需引入, 请配合`tree shaking`一起使用

## `wenyejie.ts` 为 `NodeJs` 自动生成请不要手动修改

当然修改了也没用, 每次打包它都会被重新生成写入

## issue

暂无

## Prettier

program: $ProjectFileDir$/node_modules/.bin/prettier

arguments: --write $FilePathRelativeToProjectRoot$

output: $FilePathRelativeToProjectRoot$
