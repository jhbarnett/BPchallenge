const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:5000',
    'webpack/hot/dev-server',
    path.join(__dirname + '/src/index')
  ],
  output: {
    path: path.resolve('build'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      { 
        test: /\.jsx?$/,
        loader: "babel-loader", 
        exclude: /node_modules/, 
        query:
          {
            presets:['react']
          }
      },
      { test: /\.css$/, 
        loaders: ['style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'] 
      }
    ]
  },
  postcss: () => {
    return [
      require('autoprefixer')
    ];
  }

};