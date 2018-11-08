const webpack = require("webpack");
const merge = require('webpack-merge');
const config = require('./webpack.config.js');

module.exports = merge(config, {
    devtool: 'inline-source-map',
    plugins: [
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("development"),
            WP_LANDING_URL: JSON.stringify("/")
        })
    ]
})