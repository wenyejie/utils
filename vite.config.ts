/// <reference types="vitest" />
import { BuildOptions, defineConfig, PluginOption, ServerOptions, UserConfig } from 'vite'
import { join } from 'node:path'
import { InputOption } from 'rollup'
import { readdirSync, statSync, writeFile } from 'node:fs'
import { EOL } from 'node:os'
import { name, version } from './package.json'

const { NODE_ENV } = process.env
const isDev = NODE_ENV === 'development'
const isProd = NODE_ENV === 'production'
const plugins: PluginOption = []
const entry: InputOption = []
const suffix = '.ts' // 后缀
const rFileSuffix = /\.ts$/ // 文件后缀
const ignoreFiles = [] // `utils${suffix}`

const entryFiles = readdirSync(join('./src')).filter(file => rFileSuffix.test(file) && !ignoreFiles.includes(file))
entryFiles.forEach(file => {
  entry.push(`./src/${ file }`)
})

// 获取examples文件夹中的最新修改文件
const getExamplesLatestModifiedFile = (files: string[]) => {
  let latestModifiedFile = ''
  let latestModifiedTimestamp = 0
  files.forEach(file => {
    const status = statSync(file)
    if (status.mtimeMs > latestModifiedTimestamp) {
      latestModifiedTimestamp = status.mtimeMs
      latestModifiedFile = file
    }
  })
  return latestModifiedFile
}

// 自动构建生成entry
const buildLibrary = () => {
  let content = `// @Copyright by https://github.com/${ name }/utils${ EOL }export const VERSION = '${ version }'${ EOL }`
  entryFiles.forEach(file => {
    if (file === `${ name }${ suffix }`) {
      return
    }
    content += `export * from './${ file.replace(rFileSuffix, '') }'${ EOL }`
  })
  writeFile(`./src/${ name }${ suffix }`, content, error => {
    console.error(error)
  })
}

buildLibrary()

const build: BuildOptions = {
  // target: 'esnext',
  target: 'modules',
  minify: false,
  lib: {
    entry,
    formats: [ 'es', 'cjs' ],
    name,
    fileName: (format, entryName) => {
      switch (format) {
        case 'es':
          return `${ entryName }.js`
        case 'cjs':
          return `${ entryName }.cjs`
      }
    }
  }
}

const test = {
  include: [ './tests/*.test.ts' ],
  environment: 'happy-dom',
  browser: {
    enabled: false,
    name: 'chrome'
  }
}

let server: ServerOptions = {}

if (isDev) {
  const input: InputOption = []

  const inputFiles = readdirSync(join('./examples'))
  inputFiles.forEach(file => input.push(`./examples/${ file }`))

  build.rollupOptions = {
    input
  }
  server = {
    port: 8081,
    open: getExamplesLatestModifiedFile(input),
    fs: {
      strict: false,
      allow: [ '..' ]
    }
  }
}

if (isProd) {
  build.rollupOptions = {
    output: {
      exports: 'named'
    }
  }
}

const config: UserConfig = {
  build,
  test,
  plugins,
  server,
  appType: 'mpa',
  resolve: {
    alias: {
      '@': join(__dirname, './src')
    }
  }
}

export default defineConfig(config)
