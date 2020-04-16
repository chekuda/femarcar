/* eslint-disable no-undef */
const MiniCssExtraPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = {
  output: {
    // eslint-disable-next-line no-undef
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle[hash].js'
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.module\.scss$/,
        use: [
          MiniCssExtraPlugin.loader,
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.scss$/,
        exclude: /\.module.scss$/,
        use: [
          MiniCssExtraPlugin.loader,
          'css-loader',
          'sass-loader',
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtraPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css'
    })
  ]
}
