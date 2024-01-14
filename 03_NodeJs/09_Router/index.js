const express = require("express")
const app = express()
const path = require("node:path")
const fs = require("node:fs/promises")
const cookieParser = require("cookie-parser")

app.set("view engine", "ejs")
app.set("views", path.resolve(__dirname, "views"))
app.use(express.static(path.resolve(__dirname, "public")))
app.use(express.urlencoded())
app.use(cookieParser())

// 引入students的router中间件
// const studentsRouter = require("./routers/students")
// 使用router中间件的方式 app.use(studentsRouter)
// app.use(studentsRouter)
// 使用router中间件可以配置一个路径（如/students）
// 那么实际的路径都会加上这个前缀路径（如/students-manage的实际路由将会变成/students/students-manage）
// 配置路由前缀，可以避免实际路由重名而导致的某些路由失效的情况
// app.use("/students", studentsRouter)

app.use("/students", require("./routers/students"))

// 默认登录页面
app.get("/", (req, res) => {
    res.render("login")
})

app.post("/login", (req, res) => {
    /* 
        HTTP协议是一个无状态协议，服务器无法区分请求是否发送自同一个客户端
        cookie是HTTP协议中用来解决无状态问题的技术
            - cookie本质上是一个头
                - 服务器以响应头的形式将cookie发送给客户端
                    客户端收到后将其存储，并在下次向服务器发送请求时将其传回
                    服务器可以根据cookie识别客户端
                - 读取cookie需要安装、引入、使用中间件 cookie-parser（cookie解析器）
                    1、安装
                        npm i cookie-parser
                    2、引入
                        const cookieParser = require("cookie-parser")
                    3、使用-设置中间件
                        app.use(cookieParser())
                - cookie有效期（配置对象）
                    - 默认有效期是一次会话（浏览器关闭会话结束）
                    - maxAge 设置cookie you下时间（毫秒）
                - cookie发送给客户端后不能修改
                    - 但是可以通过同名cookie替换
    */
    const { username, password } = req.body
    if (username === "oooKonata" && password === "1234") {
        // 登录成功时将用户名放入cookie
        res.cookie("username", username, {
            // 设置1个月的cookie有效期
            maxAge: 30 * 24 * 60 * 60 *1000
        })
        res.redirect("/students/manage")
    } else {
        res.send("用户名或密码错误")
    }
})

app.listen(3000, () => {
    console.log("服务器启动成功～")
})