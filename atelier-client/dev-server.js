var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    inline: true,
    historyApiFallback: true,
    stats: {
        // Config for minimal console.log mess.
        assets: false,
        colors: true,
        version: false,
        hash: false,
        timings: true,
        chunks: false,
        chunkModules: false
    }
}).listen(3000, '0.0.0.0', function (err) {
    if (err) {
        console.log(err);
    }

    console.log('Listening at 0.0.0.0:3000');
});
