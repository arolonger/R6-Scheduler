const path = require('path');
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
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
    extensions: [ '.tsx', '.ts', '.js' ],
    modules: [path.resolve(__dirname, "src"), "node_modules"]
  },
  output: {
    filename: 'R6Scheduler.js',
    path: path.resolve(__dirname, 'build'),
    library: "R6Scheduler",
    libraryTarget: "var"
  },
  mode: "development",
  // plugins: [
  //   new UglifyJSPlugin()
  // ]
};