/* 
    JS是单线程，运行时基于事件循环机制
        - 栈
            后进先出
        - 队列
            先进先出
        - 整体流程
            1、调用栈中的代码执行完毕队列中的代码才会依次进入栈中执行
            2、JS中队列有两种
                - 宏任务队列（大部分代码都会去宏任务队列排队）
                - 微任务队列（Promise的回调函数then、catch、finally）
            3、执行顺序
                栈 -> 微任务队列 -> 宏任务队列
*/          

//setTimeout向宏任务中添加一个任务
setTimeout(() => {
    console.log(1)
}, 0);

//Promise的回调函数then方法向微任务队列中添加一个任务
//该任务在微任务队列中排队执行完后在宏任务队列中添加了一个任务
Promise.resolve().then(() => {
    setTimeout(() => {
      console.log(2)
    }, 0);
})

//queueMicrotask用来向微任务队列中添加一个任务
queueMicrotask(() => {
    console.log(3)
})

//Promise的回调函数then方法向微任务队列中添加一个任务
Promise.resolve().then(() => {
    console.log(4)
})

/* 
    执行结果：
    3
    4
    1
    2
*/

