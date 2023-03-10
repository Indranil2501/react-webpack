const port = process.env.PORT || 8080;
const path = require('path');

module.exports = {
    output: {
        path: path.join(__dirname, '/build'),
        filename: 'main.[fullhash].js'
    },
    devServer: {
        host: "localhost",
        port: port,
        historyApiFallback: true,
        // static: path.resolve(__dirname, 'src'),
        open: true,
        // hot: true
    },
    module: {
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            // {
            //     test: /\.scss$/,
            //     use: [
            //         'style-loader',
            //         'css-loader',
            //         'sass-loader'
            //     ]
            // }
        ]
    }
}