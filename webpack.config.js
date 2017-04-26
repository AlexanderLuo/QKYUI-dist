var webpack = require('webpack')
var path = require('path')


module.exports = {
    entry: {
        index:  path.join(__dirname, './dev/msg'),
        // nav:    path.join(__dirname, './dev/component/nav/nav')
    },
    output: {
        path:path.join(__dirname, '/release'),
        filename: '[name].js'
    }, //页面引用的文件
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            {test: /\.html$/, loader: "html-loader"},
            {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
            { test: /\.(eot|woff|ttf|woff2|svg)$/, loader: "file-loader" }
        ]
    },
    resolve: {
        extensions: ['.js', 'node_modules/']
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            "avalon":"avalon2"
        })
    ]
}

