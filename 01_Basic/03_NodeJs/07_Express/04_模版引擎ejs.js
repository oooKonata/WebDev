// 引入express服务器框架
const express = require("express")
const path = require("node:path")
const fs = require("node:fs/promises")

// 创建服务器实例
const app = express()

// 读取json数据
const STU_ARR = require("./data/students.json")

// 配置模版引擎ejs
app.set("view engine", "ejs")
// 配置模版引擎路径（默认是当前项目下的views，但是执行方式不同可能导致路径出错，可以设置为绝对路径）
app.set("views", path.resolve(__dirname, "views"))

// 配置静态资源路径
app.use(express.static(path.resolve(__dirname, "public")))

// 配置请求体解析
app.use(express.urlencoded())

app.get("/students", (req, res) => {
    // 在node中可以配置多种模版引擎，如ejs
    /* 
        ejs模版引擎使用步骤
            1、安装ejs
                npm i ejs
            2、配置express模版引擎为ejs(不需要引入，express会直接找)
                app.set("view engine", "ejs")
            3、配置模版引擎路径
                app.set("views", path.resolve(__dirname, "views"))

            注意：模版引擎需备被渲染后才能被浏览器使用
    */

    // res.render()将模版引擎渲染成html，浏览器才能使用
    // res.render()可以用第二个参数传递对象，在模版中可以直接访问该对象
    res.render("students", { stus: STU_ARR })
})

// 创建一个添加学生的路由
app.post("/add-student", (req, res) => {
    // 1、生成id，获取STU.ARR数组最后一个元素的id加1
    const id = STU_ARR.at(-1).id + 1
    // 2、获取用户填写的信息
    const newStu = {
        id,
        name: req.body.name,
        age: +req.body.age,
        gender: req.body.gender,
        address: req.body.address
    }
    // 3、验证用户信息（略）

    // 4、将用户信息添加到数组中
    STU_ARR.push(newStu)
    // 5、将新数据写入json文件中（数据持久化）
    fs.writeFile(
        path.resolve(__dirname, "./data/students.json"),
        JSON.stringify(STU_ARR)
    ).then(() => {
        // 6、重定向，让浏览器向另一个地址发起一次请求
        res.redirect("/students")
    }).catch((err) => {
        console.log("出错了～", err)
    })
    
})

// 配置错误处理中间件
app.use((req, res) => {
    res.status(404)
    res.send("<h1>您访问的地址已被外星人劫持！</h1>")
})

// 设置监听端口，启动服务器
app.listen(3000, (req, res) => {
    console.log("服务器启动了～")
})
