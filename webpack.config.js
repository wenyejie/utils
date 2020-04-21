const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const fs = require('fs')
const packageJson = require('./package.json')

let stormContent = `export const VERSION = '${packageJson.version}'\r`
const files = fs.readdirSync(path.join('./src'))

files.forEach(filename => {
  const key = filename.replace(/\.ts$/, '')
  stormContent += `export * from './src/${filename.replace(/\.ts$/, '')}'\r`
})

fs.writeFile('./storm.ts', stormContent, () => {})

const isProd = process.env.NODE_ENV === 'production'

const webpackConfig = {
  mode: process.env.NODE_ENV,
  entry: {
    storm: './storm.ts'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: isProd ? '[name].js' : '[name].dev.js',
    chunkFilename: '[name].min.js',
    library: 'storm',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
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
    extensions: ['.ts', '.js']
  },
  optimization: {
    usedExports: true
  },
  plugins: []
}

if (isProd) {
  // // 清理文件夹
  webpackConfig.plugins.push(new CleanWebpackPlugin())
}

module.exports = webpackConfig
