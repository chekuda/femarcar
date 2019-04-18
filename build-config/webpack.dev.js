const webpack = require('webpack')
const path = require('path')

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader?sourceMap',
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
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: path.resolve(__dirname,  '../dist'),
    hot: true
  }
}