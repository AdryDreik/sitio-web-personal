import htmlWebpackPlugin from 'html-webpack-plugin';
import liveReloadPlugin from 'webpack-livereload-plugin';
import path from 'path';

module.exports = {
  mode: 'development',
  entry: {
    sitioWeb: path.resolve(__dirname, '../src/client/index.js')
  },
  output: {
    filename: '[hash].js',
    path: path.resolve(__dirname, '../src/client/dist')
  },
  module: {
    rules: [
      {
        use: {
          loader: 'babel-loader'
        },
        test: /\.(js|jsx)$/,
        exclude: /node_modules/
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      },
      {
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'scss-loader',
            options: {
              sourceMap: true
            }
          }
        ],
        test: /\.scss$/
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        }]
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/client/index.html')
    }),
    new liveReloadPlugin()
  ]
}
