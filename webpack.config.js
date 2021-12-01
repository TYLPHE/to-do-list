const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",    
    entry: {
        storage: './src/storage.js',
        index: './src/index.js',
        factory: './src/factory.js',
        push: './src/push.js',
        form: './src/form/form.js',
        calendar: './src/form/calendar.js',
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