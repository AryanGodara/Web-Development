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
    },
    module: {           //* We use this to make sure all the files first run through babel, to be converted into 'non-modern javascript', so that they can run on all the web browsers
        rules: [{
            test: /\.js$/ ,       //* We want files that end with .js
            //? test is a 'regular expression, describing the files on which we want to run babel-loader
            exclude: /node_modules/ ,    //* exclude anything inside the nodu_modules directory
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    }
};
