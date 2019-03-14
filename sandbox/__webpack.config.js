const path = require('path');

const stylesLoaders = [
  'style-loader',
  {
    loader: 'css-loader',
    options: {
      modules: true,
      localIdentName: '[path]__[local]--[hash:base64:5]',
    },
  },
  'postcss-loader',
];

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        loaders: stylesLoaders,
        include: path.resolve(__dirname, '../'),
      },
    ],
  },
};
