/* 
    在node中
        - 默认支持的事模块化规范是CommonJS
        - 在CommonJS中，一个js文件就是一个模块
        - 文件拓展名为.cjs的文件时CommonJS模块

    CommonJS规范
        - 引入模块
            - 使用require("模块路径")函数来引入模块
            - 引入自定义模块时
                - 模块名要以 ./ 或 ../ 开头
            - 引入模块时，拓展名为.js文件拓展名可以省略，.cjs不能省略
                - 补全优先级：js --> json --> node，即若未找到js文件，会引入同名json文件
                - 在CommonJS中，若省略js文件拓展名，node会自动补全
                - 建议在引入模块时，补全拓展名
            - 引入核心模块时（node提供的）
                - 直接写核心模块名字即可
*/

//通过require函数引入m1模块exports暴露的对象
const m1 = require("./m1.js")
console.log("获取m1对象属性", m1.a1, m1.b1, m1.c1)

//对象的解构赋值
const {a1, b1, c1} = require("./m1.js")
console.log("m1解构赋值", a1, b1, c1);

//对象的解构赋值
const {a2, b2, c2} = require("./m2.cjs")
console.log("m2解构赋值", a2, b2, c2);

//引入核心模块
const path = require("path")
console.log("核心模块path", path);

/* 
    module, exports, require能直接使用是因为
        模块代码是被包含在一个函数中，module, exports, require, __filename, __dirname是作为实参传入
        (function(exports, require, module, __filename, __dirname){
            //模块代码被放在这
        })
*/
//验证模块是运行在一个函数中，函数独有arguments对象
console.log(arguments);

//__filename表示当前模块的绝对路径
console.log(__filename);

//__diename表示当前模块所在的目录路径
console.log(__dirname);