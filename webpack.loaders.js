module.exports = [
  {
    test: /\.jsx?$/,
    exclude: /(node_modules|bower_components|public)/,
    loaders: ['react-hot']
  },
  {
    test: /\.jsx?$/,
    exclude: /(node_modules|bower_components|public)/,
    loader: 'babel',
    query: {
      presets: ['es2015', 'react'],
      plugins: ['transform-runtime', 'transform-decorators-legacy', 'transform-class-properties'],
    }
  },
  {
    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
    loader: "file"
  },
  {
    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: "url-loader?limit=10000&mimetype=application/font-woff"
  },
  {
    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
    loader: "url?limit=10000&mimetype=application/octet-stream"
  },
  {
    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    loader: "url?limit=10000&mimetype=image/svg+xml"
  },
  {
    test: /\.gif/,
    exclude: /(node_modules|bower_components)/,
    loader: "url-loader?limit=10000&mimetype=image/gif"
  },
  {
    test: /\.jpg/,
    exclude: /(node_modules|bower_components)/,
    loader: "url-loader?limit=10000&mimetype=image/jpg"
  },
  {
    test: /\.png/,
    exclude: /(node_modules|bower_components)/,
    loader: "url-loader?limit=10000&mimetype=image/png"
  }
];
