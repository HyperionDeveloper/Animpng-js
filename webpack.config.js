var path = require('path')

module.exports = [
    {
        entry: path.join(__dirname, 'src', 'library', 'parser.js'),
        output: {
            path: path.join(__dirname, 'lib'),
            filename: 'index.js',
            library: 'animpng-js',
            libraryTarget: 'umd'
        },
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /[\\\/](node_modules|lib)[\\\/]/
                }
            ]
        }
    },
    {
        entry: path.join(__dirname, 'src', 'demo-page', 'index.js'),
        output: {
            path: path.join(__dirname, 'docs'),
            filename: 'index.js'
        },
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /[\\\/](node_modules|lib)[\\\/]/
                },
                {
                    test: /\.css$/,
                    exclude: /[\\\/](node_modules|lib)[\\\/]/,
                    loader: 'style-loader!css-loader'
                }
            ]
        }
    }
]