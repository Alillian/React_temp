const proxy = require('http-proxy-middleware');

module.exports =function (app){
    app.use(proxy('/apis',{
        // 需要代理的主机
        target: 'https://m.juooo.com',
        // 是否跨域
        changeOrigin: true,
        //代理完成将url复写
        pathRewrite:{
            "^/apis":""
        }
    }))
}