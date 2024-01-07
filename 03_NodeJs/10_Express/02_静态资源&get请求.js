// 引入express服务器框架
const express = require("express")
const path = require("node:path")
// 获取服务器实例
const app = express()

/* 
    服务器中的代码，对于外部来说是不可见的
        - 服务器里写的html代码浏览器无法直接访问
        - 可将html页面所在目录设置为静态资源目录，浏览器就可以访问
*/
// 配置静态资源路径
// 设置static中间件之后，浏览器访问时，会自动去public目录下寻找匹配资源 
// public就是根目录，相当于 http://localhost:3000/ ,public不用出现在路由中
// 避免出错，都应设置成绝对路径
app.use(express.static(path.resolve(__dirname, "public")))

// 配置get路由-方式1
app.get("/login", (req, res) => {
    // 获取用户输入的用户名和密码
    // req.query 表示查询字符串的请求参数
    console.log(req.query.username)
    console.log(req.query.password)
    // 验证用户名和密码
    if (req.query.username === "oooKonata" && req.query.password === "123456") {
        res.send("<h1>登录成功</h1>")
    } else {
        res.send("<h1>用户名或密码错误</h1>")
    }
})

// get请求发送参数的第二种方式
// /hello/:id 表示当用户访问 /hello/xxx 时就会触发
// 在路径中以冒号命名的部分称为param（参数），在get请求时可以被解析为请求参数（动态传参）
app.get("/hello/:id", (req, res) => {
    // 可通过req.params属性获取这些参数
    // 本质上和查询字符串一样都是通过路径传参
    // 但不用写名值对，而是提前约定参数
    console.log(req.params) // {id: 'name'}
    res.send("这是hello路由")
})


// 启动服务器，设置监听端口
app.listen(3000, () => {
    console.log("服务器启动了～")
})
