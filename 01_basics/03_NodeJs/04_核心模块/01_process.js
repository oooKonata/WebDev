// 核心模块是node内置模块，可直接使用
// window是浏览器的宿主对象
// global是node中的全局对象，作用类似window
// ES标准中，全局对象标准名是 globalThis

console.log(globalThis === global) // true
console.log(globalThis)

/* 
    process 表示当前node的进程，全局变量，直接使用
        - 属性和方法
        process.exit()
            - 结束当前进程，终止node
        process.nextTick(callBack[, ...args])
            - 将函数插入到tick队列中，tick队列中的代码会在下一次事件循环之前执行，在微任务队列之前
            - 调用栈 --> tick队列 --> 微任务队列 --> 宏任务队列
*/

// process.exit()结束当前进程，终止node

// console.log("a")
// process.exit()
// console.log("b")
// console.log("c")
// // 执行结果：a


// 宏任务队列
setTimeout(() => {
    console.log(1)
}, 0)
// 微任务队列
queueMicrotask(() => {
    console.log(2)
})
// tick队列
process.nextTick(() => {
    console.log(3)
})
//调用栈
console.log(4)
// 执行结果：4 3 2 1