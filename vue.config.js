/*
 * @Author: johnwang
 * @since: 2019-11-02 15:19:55
 * @lastTime: 2019-11-02 15:48:55
 * @LastAuthor: Do not edit
 * @Github: https://github.com/tyutjohn
 */
module.exports={
    devServer:{
        host:'localhost',
        port:8080,
        proxy:{
            '/api':{
                target:'http://localhost:3000/api/',
                ws:true,
                changeOrigin:true,
                pathRewrite:{
                    '^/api':''
                }
            }
        }
    }
}