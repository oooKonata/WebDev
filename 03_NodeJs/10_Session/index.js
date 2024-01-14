const express = require("express")
const app = express()
const path = require("node:path")
const fs = require("node:fs/promises")
// const cookieParser = require("cookie-parser")
const session = require("express-session")
const FileStore = require("session-file-store")(session)

app.set("view engine", "ejs")
app.set("views", path.resolve(__dirname, "views"))
app.use(express.static(path.resolve(__dirname, "public")))
app.use(express.urlencoded())
// app.use(cookieParser())
app.use(session({
    store: new FileStore({
        // 存储路径
        path: path.resolve(__dirname, "./sessions"),
        // 加密
        // secret: "haha",
        // session有效闲置时间（默认3600秒），FileStore每隔1小时清除一次session对象
        // 单独设置没有意义，响应的cookie有效时间也要设置
        // ttl: 3600
    }),
    secret: "hello",
    // cookie: {
    //     maxAge: 1000 * 60 *60
    // }
}))

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

// 注销
app.get("/logout", (req, res) => {
    // 销毁session
    req.session.destroy(() => {
        res.redirect("/")
    })
})

app.post("/login", (req, res) => {
    /* 
        cookie的不足
            - cookie右服务器创建，客户端保存，客户端每次访问服务器时需将其返回，致使cookie不能存放较多数据
            - cookie直接存储在客户端，容易被篡改盗用
            - 所以cookie不能存储敏感信息
        session是服务器中的一个对象，用来存储用户信息，每个session拥有唯一id
            - id(cookie) -> session(对象)
            - 用户数据统一存储在服务器
            - 用户数据都有唯一对应的id
            - 将id通过cookie发送给客户端
            - 客户端每次访问服务器时将id返回，即可读取服务器中存储的数据
            - 使用步骤
                1、安装
                    npm i express-session
                2、引入
                    const session = require("express-session")
                3、使用-设置中间件
                    app.use(session({secret:"hahaha"}))
                    - 必须的配置对象{secret:"hahaha"}，用来给id加密，"hahaha"就是自定义加密字符串
            - 注意
                - 使用session时，不需要额外引入cookie-parser，session已经封装了

            session失效
                1、客户端中的cookie没了
                2、服务器中的session对象没了
            
        express-session默认将session存储到内存中，服务器一旦重启session将自动重置，所以通常会对session进行持久化操作（存储到文件或数据库）
            - 将session存储到本地文件中，引入中间件session-file-store
                1、安装
                    npm i session-file-store
                2、引入-传入的参数“session”是引入的session中间件
                    const FileStore = require("session-file-store")(session)
                3、使用-设置为中间件
                    app.use(session({
                        store: new FileStore({}),
                        secret: "hello"
                    }))

    */
    const { username, password } = req.body
    if (username === "oooKonata" && password === "1234") {
        // 登录成功时将用户名放入session
        // 这时username是放在session内存中，没有放入sessions里面的文件或者数据库中
        req.session.loginUser = username
        // 将session存储到文件中，调用save()，存储完毕时将执行回调函数
        // 存储后后续统一验证用户时通过req.session.loginUser才能得到文件中保存的用户名
        req.session.save(() => {
            res.redirect("/students/manage")
        })
    } else {
        res.send("用户名或密码错误")
    }
})

app.listen(3000, () => {
    console.log("服务器启动成功～")
})