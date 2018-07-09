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
            'vortex': './src/index.js',
            'test-app': ['babel-polyfill', './src/tests/app.js']
        },

        module: {
            rules: [
                {test: /\.js$/, loader: "babel-loader"}
            ]
        },

        output: {
            path: path.resolve(ROOT, "dist"),
            filename: "[name].bundle.js",
            publicPath: "/vortex/dist/",
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
