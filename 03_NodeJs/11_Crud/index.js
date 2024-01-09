// 引入express框架，获取服务器实例
const express = require("express")
const app = express()
const path = require("node:path")
const fs = require("node:fs/promises")

// 配置模版引擎ejs，配置模版路径
app.set("view engine", "ejs")
app.set("views", path.resolve(__dirname, "views"))

// 配置请求体解析
app.use(express.urlencoded())

// 读取学生数据（JSON）
const STU_ARR = require("./data/students.json")
console.log(STU_ARR)

// 配置学生管理路由
app.get("/students-manage", (req, res) => {
    // 将模版渲染成html，并将学生信息传递过去
    res.render("students-manage", { stus: STU_ARR })
})

// 添加学生路由
app.post("/add-student", (req, res) => {
    console.log("@@@", req.body)
    // 1、生成id
    const id = STU_ARR.at(-1).id + 1
    // 2、获取用户填写的新学生信息
    const newStu = {
        id,
        name: req.body.name,
        age: +req.body.age,
        gender: req.body.gender,
        address: req.body.address
    }
    console.log(newStu.age)
    // 3、验证用户信息（略）
    // 4、新学生信息添加到学生数组
    STU_ARR.push(newStu)
    // 5、写入到json文件中（数据持久化）
    fs.writeFile(
        // 写入json路径
        path.resolve(__dirname, "./data/students.json"),
        // 写入字符串（数组转换成字符串）
        JSON.stringify(STU_ARR)
    ).then(() => {
        // 重定向到学生管理
        res.redirect("/students-manage")
    })
})

// 删除学生路由
app.post("/delete-student", (req, res) => {
    // 获取要删除信息的学生的id




})

// 修改学生路由
app.post("/update-student", (req, res) => {
    // 获取要修改信息的学生的id



    
})

// 全局错误处理
app.use((req, res) => {
    res.status(404)
    res.send("<h1>地址被外星人劫持了～</h1>")
})

// 设置监听端口
app.listen(3000, () => {
    console.log("服务器启动成功～")
})