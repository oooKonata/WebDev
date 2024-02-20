const express = require("express")
const path = require("node:path")
// 服务器实例
const app = express()
// 配置静态资源
app.use(express.static(path.resolve(__dirname, "public")))

// 引入解析请求体中间件
app.use(express.urlencoded())

// 配置post路由
app.post("/login", (req, res) => {
    // 通过req.body获取post请求体参数
    // 因Express框架极简，默认不会解析请求体，需通过中间件增加解析功能 app.use(express.urlencoded())
    const username = req.body.username
    const password = req.body.password

    if (username === "oooKonata" && password === "123456") {
        res.send("<h1>登录成功</h1>")
    } else {
        res.send("<h1>用户名或密码错误</h1>")
    }
})

// 设置错误处理中间件，前面所有路由都不匹配时执行
// 不配置路径，就是根目录
app.use((req, res => {
    res.status(404)
    res.send("<h1>未找到页面</h1>")
}))

// 设置监听端口，启动服务器
app.listen(3000, () => {
    console.log("服务器启动了～")
})
