const express = require("express")
const app = express()

// 解析请求体中间件
app.use(express.urlencoded())
// 解析JSON中间件
app.use(express.json())

// 模拟学生列表
const STU_ARR = [
    { id: "1", name: "孙悟空", age: 18, gender: "男", address: "花果山" },
    { id: "2", name: "猪八戒", age: 28, gender: "男", address: "高老庄" },
    { id: "3", name: "沙悟净", age: 38, gender: "男", address: "流沙河" }
]

// 允许跨域请求的配置
app.use((req, res, next) => {
    // 允许任何跨域请求的响应头
    res.setHeader("Access-Control-Allow-Origin", "*")
    // 允许指定跨域请求
    // res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500")
    // 允许的请求方式
    // res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
    // 允许传递的请求头
    // res.setHeader("Access-Control-Allow-Headers", "Content-type")
    next()
})

// 查询全部学生路由
app.get("/students", (req, res) => {
    console.log("收到客户端的 /students get请求")
    res.send({
        status: "OK",
        data: STU_ARR
    })
})

// 添加学生路由，将新增的学生信息发送给客户端
app.post("/students", (req, res) => {
    const { name, age, gender, address } = req.body
    const stu = {
        id: +STU_ARR.at(-1).id + 1 + "",
        name,
        age: +age,
        gender,
        address
    }
    STU_ARR.push(stu)
    res.send({
        status: "OK",
        data: stu
    })
})

// 查询某个学生路由
app.get("/students/:id", (req, res) => {
    const id = req.params.id
    const stu = STU_ARR.find(stu => stu.id === id)
    res.send({
        status: "OK",
        data: stu
    })
})

// 删除学生路由
app.delete("/students/:id", (req, res) => {
    const id = req.params.id
    for (let i = 0; i < STU_ARR.length; i++) {
        if (STU_ARR[i].id === id) {
            const stu = STU_ARR[i]
            STU_ARR.splice(i, 1)
            res.send({
                status: "OK",
                data: stu
            })
            return
        }
    }
    // 学生不存在，执行以下代码
    res.status(403).send({
        status: "err",
        data: "学生id不存在"
    })
})

// 修改学生路由
app.put("/students", (req, res) => {
    const { id, name, age, gender, address } = req.body
    const stu = STU_ARR.find(stu => stu.id === id)
    if (stu) {
        stu.name = name
        stu.age = age
        stu.gender = gender
        stu.address = address

        res.send({
            status: "OK",
            data: stu
        })
    } else {
        res.status(403).send({
            status: "err",
            data: "学生信息不存在"
        })
    }

})

app.listen(3000, () => {
    console.log("服务器启动了～")
})
