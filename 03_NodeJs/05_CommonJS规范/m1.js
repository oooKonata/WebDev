/* 
    定义模块时，模块中的内容默认是不能被外部看见的
        可以通过 exports 设置要向外暴露的内容

    访问exports的方式有两种
        exports
        module.exports
        - 在其他模块中引入当前模块时，require函数返回的就是exports对象
        - 可以将希望暴露给外部模块的内容设置为exports对象的属性
*/

// 通过给对象exports逐个设置属性逐个暴露
// exports.a = "孙悟空"
// exports.b = {
//     name: "白骨精"
// }
// exports.c = function fn() {
//     console.log("猪八戒");
// }

// 通过给对象exports设置属性的方式一次性暴露
module.exports = {
    a1: "孙悟空",
    b1: {
        name: "白骨精"  
    },
    c1: function fn() {
        console.log("猪八戒")
    }
}