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
let STU_ARR = require("./data/students.json")

// 配置学生管理路由
app.get("/students-manage", (req, res) => {
    // 将模版渲染成html，并将学生信息传递过去
    res.render("students-manage", { stus: STU_ARR })
})

// 添加学生信息路由
app.post("/add-student", (req, res) => {
    // 1、生成id，判断学生数组是否为空，数组为空，直接将id设为1
    const id = STU_ARR.at(-1) ? STU_ARR.at(-1).id + 1 : 1
    // 2、获取用户填写的新学生信息
    const newStu = {
        id,
        name: req.body.name,
        age: +req.body.age,
        gender: req.body.gender,
        address: req.body.address
    }
    console.log("添加学生", newStu)
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

// 删除学生信息路由
app.get("/delete-student", (req, res) => {
    // 1、获取要删除信息的学生的id
    const id = +req.query.id
    // 2、删除id学生信息，并获取新的（过滤后的）学生数组
    STU_ARR = STU_ARR.filter(stu => stu.id !== id)
    // 3、将新数组写入json文件
    fs.writeFile(
        path.resolve(__dirname, "./data/students.json"),
        JSON.stringify(STU_ARR)
    ).then(() => {
        // 4、重定向到学生管理列表
        res.redirect("/students-manage")
    }).catch((err) => {
        console.log("删除失败！", err)
    })  
})

// 回显修改学生信息路由（点击修改显示一个修改信息的页面）
app.get("/modify-student", (req, res) => {
    // 获取要修改学生信息的id
    const id = +req.query.id
    // 获取要修改学生信息的信息，回显到modify-student.ejs
    const modifyStu = STU_ARR.find(stu => stu.id === id)
    // console.log("修改信息", modifyStu)

    res.render("modify-student", {modifyStu})
})

// 更新修改学生信息后的学生列表
app.post("/update-student", (req, res) => {
    // 获取修改学生信息
    const { id, name, age, gender, address } = req.body
    // 根据id修改学生对象属性值
    const modifyStu = STU_ARR.find(stu => stu.id == id)
    modifyStu.name = name
    modifyStu.age = age
    modifyStu.gender = gender
    modifyStu.address = address
    // 修改后学生信息写入到json文件
    fs.writeFile(
        path.resolve(__dirname, "./data/students.json"),
        JSON.stringify(modifyStu)
    ).then(() => {
        res.redirect("/students-manage")
    }).catch((err) => {
        console.log("修改失败!", err)
    })
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