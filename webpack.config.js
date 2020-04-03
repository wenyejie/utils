const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const isProd = process.env.NODE_ENV === 'production'

const webpackConfig = {
  mode: process.env.NODE_ENV,
  entry: {
    index: './index.ts',
    storm: './index.ts'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: isProd ? '[name].js' : '[name].dev.js',
    chunkFilename: '[name].min.js',
    library: {
      root: 'storm',
      amd: 'storm',
      commonjs: 'storm'
    },
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
