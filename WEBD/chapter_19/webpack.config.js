const path = require('path');

module.exports = {
    // mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname ,  'dist/assets/'),
        filename: 'bundle.js'
    },
    // devServer: { //! This only worked in version 3 of webpack-dev-server
    //     contentBase: path.resolve(__dirname, 'dist'),
    //     publicPath: '/assets/'
    // }
    devServer: {    //* Use this for version 4 of webpack-web-server
        // contentBase
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        // publicPath
        devMiddleware: {
            publicPath: "/assets/"
        }
    }
};
