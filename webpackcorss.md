跨域请求的设置

首先在项目的config文件夹中，找到index.js,你会看到dev属性下面的proxyTable的值为一个空的对象，即proxyTable:{},咱们要做的就是设置这个对象：
proxyTable:{
　 '/':{
    #把 发送到target 域名下的请求都代理到 '/' 下 
　　target:'http://localhot:3000',  
    //是否改变域名
    changeOrigin:true,
    //路径代理
    pathRewrite:{
    # 把发送到api的请求都代理到 　　target域下 
        '^/api':'/'   
    }
　　}

}
module.exports = merge(prodEnv, {  
 NODE_ENV: '"development"',//开发环境 
 API_HOST:"/api/"

})
dev.env.js设置完毕后，需要重新启动项目，然后就可以调用你设置的域名的数据接口了

vue-cli  3.0

vue.config.js里面配置

const path = require('path')

const resolve = dir => path.join(__dirname, dir)

const BASE_URL = process.env.NODE_ENV === 'production' ? '/' : '/'

module.exports = {
  lintOnSave: false,
  baseUrl: BASE_URL,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
  },
  // 打包时不生成.map文件
  productionSourceMap: false,
  devServer: {
    // proxy: 'http://localhost:3000'
  }
}