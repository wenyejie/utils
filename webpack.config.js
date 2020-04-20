const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const fs = require('fs')

const isProd = process.env.NODE_ENV === 'production'

const entry = {}
const files = fs.readdirSync(path.join('./'))

files.forEach(filename => {
  if (!/\.ts$/.test(filename)) {
    return
  }
  const key = filename.replace(/\.ts$/, '')
  entry[key] = './' + filename
})

const webpackConfig = {
  mode: process.env.NODE_ENV,
  entry,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: isProd ? '[name].js' : '[name].dev.js',
    chunkFilename: '[name].min.js',
    library: 'storm',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  devtool: isProd ? false : 'source-map',
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
