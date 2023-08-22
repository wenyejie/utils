/// <reference types="vitest" />
import { BuildOptions, defineConfig, PluginOption, UserConfig, ServerOptions } from 'vite'
import { join } from 'node:path'
import { InputOption } from 'rollup'
import { readdirSync, writeFile } from 'node:fs'
import { version } from './package.json'

const { NODE_ENV } = process.env

const isDev = NODE_ENV === 'development'
const isProd = NODE_ENV === 'production'

const plugins: PluginOption = []

const entry:InputOption = []

const entryFiles = readdirSync(join('./src'))
entryFiles.forEach(file => {
  entry.push(`./src/${file}`)
})

const input:InputOption = []

const inputFiles = readdirSync(join('./examples'))
inputFiles.forEach(file => input.push(`./examples/${file}`))

const rFileSuffix = /\.ts$/ // 文件后缀

// 自动构建生成wenyejie.ts
const buildMain = () => {
  let content = `// @Copyright by https://github.com/wenyejie/utils\rexport const VERSION = '${version}'\r`
  entryFiles.forEach(file => {
    if (file === 'wenyejie.ts' || !rFileSuffix.test(file)) {
      return
    }
    content += `export * from './${file.replace(rFileSuffix, '')}'\r`
  })
  writeFile('./src/wenyejie.ts', content, error => {
    console.error(error)
  })
}

buildMain()

const build:BuildOptions = {
  target: 'esnext',
  minify: false,
  lib: {
    entry,
    name: 'wenyejie',
    fileName: (format, entryName) => {
      return `${entryName}.${format}.js`
    }
  }
}

const test = {
  include: ['./tests/*.test.ts'],
  environment: 'jsdom'
}

const server:ServerOptions = {
  port: 8081,
  open: './examples/'
}

if (isDev) {
  build.rollupOptions = {
    input
  }
}

if(isProd) {
  build.rollupOptions = {
    output: {
      exports: 'named'
    },
  }
}

const config:UserConfig = {
  build,
  test,
  plugins,
  server,
  appType: 'mpa',
  resolve: {
    alias: {
      '@': join(__dirname, './src')
    }
  },
}

export default defineConfig(config)