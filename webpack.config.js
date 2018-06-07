const fs = require('fs');
const path = require('path');

module.exports = {
  target: 'web',
  entry: path.join(__dirname, 'website/index.js'),
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          plugins: [
            'add-module-exports',
            'transform-runtime',
            'transform-react-jsx'
          ],
          presets: [
            ['env', {
              targets: {
                browsers: ['last 2 versions', 'safari >= 7']
              }
            }]
          ]
        }
      }
    }]
  },
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js',
  }
};
