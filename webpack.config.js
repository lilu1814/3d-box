var options = require('./webpack.base.js');
    options.entry = './src';
    options.output = {
      library: '3dBox',
      libraryTarget: 'umd',
      filename: '3dBox.js',
      path: './dist'
    };
    options.externals = {
      vue: 'Vue'
    };
module.exports = options;