/* 
    Express是一个保持最小规模的灵活的Node.js Web应用程序开发框架
        通过express可以快速在node中搭建一个web服务器
    - 使用步骤
        1、创建并初始化项目
        2、安装express
        3、创建index.js
    - 自动重启服务器工具nodemon
        - 设置为开发依赖(开发依赖可用可不用，一般是开发调试类工具)
            npm install nodemon -D
        - 启动nodemon（可设置在package.json文件中的scripts中，使用npm start快速启动）
            npx nodemon index.js

*/

// 引入express
const express = require("express")

// 获取服务器实力对象( express() 可以理解为工厂函数，直接调用就创建实例对象)
const app = express()

/* 
    服务器能被正常访问需要设置路由
        - 路由根据不同的请求方式和请求地址来处理用户请求
            app.METHOD(...)
                METHOD 是请求方式 GET、POST、...
            两个参数
                - 路由路径
                - 路由回调函数
                    三个参数request、response、next
        - 中间件
            在express中使用app.use来定义一个中间件
                作用和用法与路由类似
            与路由区别
                会匹配所有包含设置目录的请求
            作用
                1、权限控制
                2、通用路由功能写在中间件里（理解为重复的路由功能提取出来）
*/

// 中间件匹配当前目录及其子目录的路由请求
// next()函数调用后，可以触发（放行）后续的中间件
// 同路径中间件，前面不放行，后面同路径中间件不生效
// next不能在响应处理完毕后调用（调用res.send()之后，响应处理完毕并发出，再执行后续中间件没有意义）
app.use("/", (req, res, next) => {
    console.log("中间件1", Date.now())
    // res.send("我是中间件1返回的响应")
    next()
})
app.use("/", (req, res, next) => {
    console.log("中间件2", Date.now())
    // res.send("我是中间件2返回的响应")
    next()
})
app.use("/", (req, res, next) => {
    console.log("中间件3", Date.now())
    res.send("我是中间件33ssaaass33返回的响应")
})

// 斜杠 / 表示根目录
// 路由回调函数执行时会接收三个参数：request、response、next
app.get("/", (req, res) => {
    console.log("有人访问我了～")
    // 读取用户请求（req），通过req获取客户端传递的数据
    console.log(req.url)
    // 根据请求返回响应(res)，通过res向客户端返回数据
    // res.sendStatus() 向客户端发送响应状态码
    // res.status() 设置状态码但不发送
    // res.send() 设置并发送响应体
    res.status(200)
    res.send("你的请求已经收到，但是我不想给你看内容")
})

// 启动服务器
// app.listen(端口号) 用来启动服务器，回调函数在服务器启动后执行
// 服务器启动后，可通过3000端口来访问
// 协议名://ip地址:端口号/路径
// http://localhost:3000
// http://127.0.0.1:3000
app.listen(3000, () => {
    console.log("服务器启动了～")
})