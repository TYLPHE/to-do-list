const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    storage: './src/storage/storage.js',
    index: './src/index.js',
    factory: './src/storage/factory.js',
    push: './src/table/push.js',
    description: './src/form/description.js',
    form: './src/form/form.js',
    calendar: './src/form/calendar.js',
    priority: './src/form/priority.js',
    tag: './src/form/tag.js',
    submit: './src/form/submit.js',
    rowOptions: './src/table/rowOptions.js',
    lastEdited: './src/table/lastEdited.js',
    tab: './src/table/tabs.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'To do list by TYLPHE',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
