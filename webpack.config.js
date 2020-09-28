const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const fs = require("fs");
//const nodeExternals = require('webpack-node-externals');
//const nav = require('./common/nav')

const multipleHTMLFiles = () => {
    let arrHtmlPlugins = [];
    let files = fs.readdirSync('./client/views');
    files.map(file => {
        arrHtmlPlugins.push(new HtmlWebpackPlugin({
            template: `./client/views/${file}`,
            filename: path.resolve(__dirname, "build", "views", `${file}`)
            }));       
        });
    return arrHtmlPlugins;
}

module.exports = {
    entry: {
        react_app: './client/pages/layoutPage.tsx'
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "build", "js")
    },
    target: 'node',
    plugins: multipleHTMLFiles(),
    //externals: [nodeExternals()],
    mode: "development",
    node: {
        // Need this when working with express, otherwise the build fails
        __dirname: false,   // if you don't put this is, __dirname
        __filename: false,  // and __filename return blank or /
      },
      resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    module: {
        rules: [
              {
                test: /\.(ts|tsx)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-typescript', '@babel/preset-react']
                    }
                }
            },
            // {
            //     test: /\.ejs$/,
            //     use: [
            //         {
            //           loader: "ejs-webpack-loader",
            //           options: {
            //             data: { title: "Movies Portal", navData: nav },
            //             htmlmin: true
            //           }
            //         }
            //     ]
            // },
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'}
                ]
            },
            {
                test: /\.(png|jpg)$/,
                use: [
                    {loader: 'url-loader'}
                ]
            },
            {
                test: /\.gif$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                        emitFile: false,
                        name: '/images/[name].[ext]',
                      },
                  },
                ],
              },         
        ]
    }
}