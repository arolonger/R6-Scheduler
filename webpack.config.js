const path = require('path');
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/R6Scheduler.ts',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '*', '.tsx', '.ts', '.js' ],
    modules: [path.resolve(__dirname, "src"), "node_modules"]
  },
  output: {
    filename: 'R6Scheduler.js',
    path: path.resolve(__dirname, 'build'),
    library: "R6Scheduler",
    libraryTarget: "var",
    libraryExport: 'default',
  },
  devServer: {
    contentBase: './',
    // hot: true
  },
  //mode: "production",
  mode: "development",
  plugins: [    
    // new webpack.NamedModulesPlugin(),
    // new webpack.HotModuleReplacementPlugin()
    // new UglifyJSPlugin()
  ],
  watchOptions: {
    ignored: ['src/tests/**/*.ts']
  }
};
