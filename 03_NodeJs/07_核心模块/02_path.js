/* 
    path 用于获取文件路径
*/

//引入path
const path = require("path")
// console.log(path)

// // __dirname 获取当前目录，不管用何种方式运行当前文件，都可以获得正确的路径，不能写死
// const result = path.resolve(__dirname, "./oooKonata.js")
// console.log(result)
// // 执行结果：/Users/oooKonata/Desktop/WebDev/03_NodeJs/07_核心模块/oooKonata.js

const result = path.resolve(__dirname, "../oooKonata.js")
console.log(result)
// 执行结果：/Users/oooKonata/Desktop/WebDev/03_NodeJs/oooKonata.js
// 路径覆盖掉了./oooKonata.js文件的父级目录