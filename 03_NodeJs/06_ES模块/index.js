/* 
    默认情况下，node中模块化标准是CommonJS
    使用ES模块化的两种方案
        1、使用 .mjs 作为扩展名
        2、package.json设置 "type": "module"，当前项目下所有js文件都默认为ES Module

    ES模块不能省略扩展名
*/

// 解构赋值
// import {a, b, c} from "./m1.mjs"
// console.log(a, b, c)

// 解构赋值，用 as 取别名
// import {a as hello, b, c} from "./m1.mjs"
// console.log(hello, b, c)

// 通过ES模块导入的内容都是常量
// 导入默认导出，默认导出不用 {} 包裹
//导入默认导出可以随意命名，如 sum 改为hello也可以
// import sum from "./m1.mjs"
import sum, {a, b, c} from "./m1.mjs"
console.log(sum(123, 456), a, b, c)

// 579 10 孙悟空 {name: '猪八戒'}