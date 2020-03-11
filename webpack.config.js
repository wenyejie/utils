const path = require('path')
const fs = require('fs')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const dir = path.join('./src')
const files = fs.readdirSync(dir)

const entry = {}

files.forEach(item => {
  if (!/\.js$/.test(item)) {
    return
  }
  const key = item.replace(/\.js$/, '')
  entry[key] = './src/' + item
})

module.exports = {
  mode: 'production',
  entry,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
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
  plugins: [
    // 清理文件夹
    new CleanWebpackPlugin()
  ]
}
