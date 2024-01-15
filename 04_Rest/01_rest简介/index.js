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

// 查询学生路由
app.get("/students", (req, res) => {
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

app.listen(3000, () => {
    console.log("服务器启动了～")
})
