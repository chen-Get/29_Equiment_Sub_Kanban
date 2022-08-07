module.exports = {
    devServer: {
        overlay: {
            warning: false,
            err: false
        },
        hot: true,
        hotOnly: true, // 是否热更新
        host: '0.0.0.0',
        port: '8080',
        open: true,
        proxy: {
            [process.env.VUE_APP_BASE_API]: {
                target: process.env.VUE_APP_REQUEST_URL,
                changeOrigin: true,
                pathRewrite: {
                    ['^' + process.env.VUE_APP_BASE_API]: ''
                }
            }
        },
        disableHostCheck: true
    }
}