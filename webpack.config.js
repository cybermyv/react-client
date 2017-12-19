var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {

    context: __dirname,

    entry: './src/index.js',

    output: {
        path: __dirname+'/public',
        filename: 'bundle.js'
    },

    module: {

        loaders: [{
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },

            {
                test: /\.(html)$/,
                use: [
                    'html-loader'
                ]
            },



            { test: /\.css$/, loader: "style-loader!css-loader" },

            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, use: ["url-loader?limit=10000&mimetype=application/font-woff"] },
            { test: /\.(ttf|eot|png|svg|jpg|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/, use: ["file-loader"] }


        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.html',
          inject: "body"
        })
      ]
};