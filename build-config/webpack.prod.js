const MiniCssExtraPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = {
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle[hash].js'
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtraPlugin.loader,
          'css-loader',
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                path.join(__dirname, '../src/styles/mixins.scss'),
                path.join(__dirname, '../src/styles/variables.scss'),
              ]
            }
          }
        ]
      },
    ]
  },
  plugins: [
    new MiniCssExtraPlugin({
      filename: 'css.[hash].css'
    })
  ]
}