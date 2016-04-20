module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    path: './target',
    filename: '[name].js',
    libraryTarget: 'commonjs'
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel'}
    ]
  }
};
