const path = require('path');
const outputDir = path.join(__dirname, 'build/');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

const devServer = {
  contentBase: outputDir,
  historyApiFallback: true
};

module.exports = {
  entry: './src/Index.bs.js',
  mode: isProd ? 'production' : 'development',
  output: {
    path: outputDir,
    publicPath: outputDir,
    filename: 'Index.js'
  },
  devServer: !isProd ? devServer : undefined,
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html')
    })
  ]
};
