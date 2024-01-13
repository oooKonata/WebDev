const express = require("express")
const path = require("node:path")
const fs = require("node:fs/promises")

// 创建router对象
const router = express.Router()

// 引入学生列表
let STU_ARR = require("../data/students.json")

// 学生管理列表路由
router.get("/manage", (req, res) => {
    res.render("students-manage", {stus: STU_ARR})
})

// 添加学生路由
router.post("/add", (req, res, next) => {
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
    // 3、验证用户信息（略）
    // 4、新学生信息添加到学生数组
    STU_ARR.push(newStu)
    // 5、写入到json文件中（数据持久化）
    // 配合next(),交由末端中间件统一处理
    next()
})

// 删除学生路由
router.get("/delete", (req, res, next) => {
    // 1、获取要删除信息的学生的id
    const id = +req.query.id
    // 2、删除id学生信息，并获取新的（过滤后的）学生数组
    STU_ARR = STU_ARR.filter(stu => stu.id !== id)
    // 3、将新数组写入json文件
    fs.writeFile(
        path.resolve(__dirname, "../data/students.json"),
        JSON.stringify(STU_ARR)
    ).then(() => {
        // 4、重定向到学生管理列表
        res.redirect("/students/manage")
    }).catch((err) => {
        console.log("删除失败！", err)
    })  
})

// 修改学生路由
router.get("/modify", (req, res) => {
    // 获取要修改学生信息的id
    const id = +req.query.id
    // 获取要修改学生信息的信息，回显到modify-student.ejs
    const modifyStu = STU_ARR.find(stu => stu.id === id)
    // console.log("修改信息", modifyStu)

    res.render("modify-student", {modifyStu})
})

// 更新修改学生信息后的学生列表
router.post("/update", (req, res, next) => {
    // 获取修改学生信息
    const { id, name, age, gender, address } = req.body
    // 根据id修改学生对象属性值
    const modifyStu = STU_ARR.find(stu => stu.id == id)
    modifyStu.name = name
    modifyStu.age = age
    modifyStu.gender = gender
    modifyStu.address = address
    // 修改后学生信息写入到json文件
    next()
})

// 处理文件存储的中间件,配合需要存储的路由的next()放行，这里的文件存储就会执行
router.use((req, res) => {
    fs.writeFile(
        // 写入json路径
        path.resolve(__dirname, "../data/students.json"),
        // 写入字符串（数组转换成字符串）
        JSON.stringify(STU_ARR)
    ).then(() => {
        // 重定向到学生管理
        res.redirect("/students/manage")
    })
})

// 将router暴露
module.exports = router