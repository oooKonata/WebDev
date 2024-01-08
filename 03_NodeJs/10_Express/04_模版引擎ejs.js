// 引入express服务器框架
const express = require("express")
const path = require("node:path")
// 创建服务器实例
const app = express()

// 创建一个学生数组
const STU_ARR = [
    {
        name: "孙悟空",
        age: "18",
        gender: "男",
        address: "花果山"
    },
    {
        name: "猪八戒",
        age: "28",
        gender: "男",
        address: "高老庄"
    },
    {
        name: "沙悟净",
        age: "38",
        gender: "男",
        address: "流沙河"
    }
]

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

// 配置错误处理中间件
app.use((req, res) => {
    res.status(404)
    res.send("<h1>您访问的地址已被外星人劫持！</h1>")
})

// 设置监听端口，启动服务器
app.listen(3000, (req, res) => {
    console.log("服务器启动了～")
})
