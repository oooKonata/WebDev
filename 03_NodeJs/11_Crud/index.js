// 引入express框架，获取服务器实例
const express = require("express")
const app = express()
const path = require("node:path")

// 配置模版引擎ejs，配置模版路径
app.set("view engine", "ejs")
app.set("views", path.resolve(__dirname, "views"))

// 读取学生数据（JSON）
const STU_ARR = require("./data/students.json")
console.log(STU_ARR)

// 配置学生管理路由
app.get("/students-manage", (req, res) => {
    // 将模版渲染成html，并将学生信息传递过去
    res.render("students-manage", { stus: STU_ARR })
})

// 设置监听端口
app.listen(3000, () => {
    console.log("服务器启动成功～")
})