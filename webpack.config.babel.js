import path from 'path';

// noinspection JSUnresolvedVariable
const MODE = "development",
    DEV_TOOL = "source-map",
    ROOT = __dirname;


// noinspection JSUnusedGlobalSymbols
export default [
    {
        devtool: DEV_TOOL,

        mode: MODE,

        entry: {
            'menu': './src/index.js'
        },

        module: {
            rules: [
                {test: /\.js$/, loader: "babel-loader"}
            ]
        },

        output: {
            path: path.resolve(ROOT, "dist"),
            filename: "[name].bundle.js",
            publicPath: "/static/js/",
            chunkFilename: "chunk-[name].bundle.js"
        },

        externals: {
            jquery: 'jQuery'
        },

        optimization: {
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        chunks: 'all'
                    }
                }
            }
        }
    }
];
