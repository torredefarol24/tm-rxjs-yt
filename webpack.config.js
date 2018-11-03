const path = require('path');

module.exports = {
  entry : "./src/main.ts",
  output : {
    path: path.resolve(__dirname, 'dist'),
    filename : "app.bundle.js"
  },
  module : {
    rules : [
      {
        use : 'ts-loader',
        exclude : /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.js', '.ts']
  },
  devtool: 'inline-source-map'
}