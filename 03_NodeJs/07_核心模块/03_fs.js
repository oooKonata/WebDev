/* 
    fs  (File System)
        - fs用来帮助node操作磁盘中的文件
        - 需要引入使用 
*/

// fs前面加 node: 可以加快node查询fs，同样适用于path
// const fs = require("fs")
const fs1 = require("node:fs")
const path = require("node:path")

/* 
    // fs常用方法
    fs.readFile() // 读取文件（异步）
    fs.readFileSync() // 读取文件（同步）
    fs.appendFile() // 创建新文件或将数据添加到已有的文件（没有路径则创建一个新的文件）
    fs.mkdir() // 创建目录
    fs.rmdir() // 删除目录
    fs.rm() // 删除文件
    fs.rename() // 重命名（剪切）
    fs.copyFile() // 复制
*/


/* 
    readFileSync() 同步读取文件的方法，会阻塞后面代码的执行
        - 通过fs模块读取磁盘数据时，读取的数据会以buffer对象的形式返回
        - Buffer是一个临时存储数据的缓冲区，使用toString()方法可以转换成字符串
 */
const buf =  fs1.readFileSync(path.resolve(__dirname, "./hello.txt"))
console.log("readFileSync", buf.toString())

/* 
    readFile() 异步读取文件的方法
        - 两个参数：文件路径 & 回调函数
        - 回调函数（异步函数的特征）用来返回读取的数据，读取的数据以参数形式传入回调函数
*/
fs1.readFile(
    path.resolve(__dirname, "./hello.txt"),
    //两个参数，错误
    (err, buffer) => {
        if (err) {
            console.log("读取失败", err)
        } else {
            console.log("readFile", buffer.toString())
        }
    }
)

// Promise版本的fs方法
// 导入promise版本的fs
const fs2 = require("node:fs/promises")
fs2.readFile(path.resolve(__dirname, "./hello.txt"))
    .then(buffer => {
        console.log("Promise", buffer.toString())
    })
    .catch(err => {
        console.log("读取失败", err)
    })

// async & await版本fs方法
;(async () => {
    try {
        const buffer = await fs2.readFile(path.resolve(__dirname, "./hello.txt"))
        console.log("async&await", buffer.toString())
    } catch (err) {
        console.log("读取失败", err)
    }
})()

// 给文件添加数据，两个参数：“文件路径”与“要添加的内容”
fs2.appendFile(path.resolve(__dirname, "./hello.txt"), "也可以去散个步！")
    .then(result => {
        console.log("添加成功")
    }).catch(err => {
        console.log("添加失败了", err)
    })

// 给文件添加数据，两个参数：“文件（hello）路径”与“要添加的内容”，若目标文件（hello）不存在则创建一个（hello2），并写入内容
fs2.appendFile(path.resolve(__dirname, "./hello2.txt"), "也可以去散个步！")
    .then(result => {
        console.log("添加成功")
    }).catch(err => {
        console.log("添加失败了", err)
    })

// 复制一个文件到另外一个目录
fs2.readFile(path.resolve(__dirname, "./imgs/haha.png"))
    .then(buffer => {
        // 读取的结果写到外层文件，并重命名了
        // 返回写入的结果给后续的then函数判断写入状态
        return fs2.appendFile(path.resolve(__dirname, "./heihei.png"), buffer)
    })
    .then(result => {
        console.log("图片复制成功")
    })
    .catch(err => {
        console.log("复制图片失败", err)
    })

/* 
    以下用法类似，不另作举例
    
    fs.mkdir() // 创建目录
    fs.rmdir() // 删除目录
    fs.rm() // 删除文件
    fs.rename() // 重命名（剪切）
    fs.copyFile() // 复制
*/