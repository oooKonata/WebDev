const express = require("express")
const app = express()
const path = require("node:path")
const fs = require("node:fs/promises")

app.set("view engine", "ejs")
app.set("views", path.resolve(__dirname, "views"))
app.use(express.static(path.resolve(__dirname, "public")))
app.use(express.urlencoded())

// 引入students的router中间件
// const studentsRouter = require("./routers/students")
// 使用router中间件的方式 app.use(studentsRouter)
// app.use(studentsRouter)
// 使用router中间件可以配置一个路径（如/students）
// 那么实际的路径都会加上这个前缀路径（如/students-manage的实际路由将会变成/students/students-manage）
// 配置路由前缀，可以避免实际路由重名而导致的某些路由失效的情况
// app.use("/students", studentsRouter)

app.use("/students", require("./routers/students"))

app.listen(3000, () => {
    console.log("服务器启动成功～")
})