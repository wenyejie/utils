const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const fs = require('fs')
const packageJson = require('./package.json')

const buildIndex = () => {
  let utilsContent = `export const VERSION = '${packageJson.version}'\r`
  const files = fs.readdirSync(path.join('./src'))

  files.forEach(filename => {
    if (!/\.js$/.test(filename)) {
      return
    }
    utilsContent += `export * from './src/${filename}'\r`
  })

  fs.writeFile('./index.js', utilsContent, () => {})
}

const isProd = process.env.NODE_ENV === 'production'

if (isProd) {
  buildIndex()
}

const webpackConfig = {
  mode: process.env.NODE_ENV,
  entry: {
    wyjutils: './index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: isProd ? '[name].js' : '[name].dev.js',
    chunkFilename: '[name].min.js',
    library: 'wyjutils',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  devtool: 'source-map',
  module: {
    rules: [
      // {
      //   test: /\.ts$/,
      //   use: 'ts-loader',
      //   exclude: /node_modules/
      // },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-transform-runtime']
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js']
  },
  optimization: {
    usedExports: true
  },
  plugins: []
}

if (isProd) {
  // 清理文件夹
  webpackConfig.plugins.push(new CleanWebpackPlugin())
}

module.exports = webpackConfig
