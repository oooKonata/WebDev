function sum(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        },1000)
    })
}
//Promise多步求和
sum(123, 456)
    .then(result => sum(result, 7))
    .then(result => sum(result, 8))
    .then(result => sum(result, 9))
    .then(result => sum(result, 10))
    .then(result => console.log("使用Promise的then方法", result))

//async关键字创建一个异步函数，函数的返回值封装在一个Promise中返回
//async声明的异步函数中可以使用await关键字以同步的方式调用异步函数
//使用await关键字调用异步函数时，会暂停代码运行，直到异步代码有结果，才会将结果返回
//await只能用于async声明的异步函数中，或es模块的顶级作用域中
//使用await关键字时，当前函数后面所有的代码会在当前函数执行完，全部被放到微任务队列中
async function fn(a, b) {
    let result = await sum(123, 456)
    result = await sum(result, 7)
    result = await sum(result, 8)
    result = await sum(result, 9)
    result = await sum(result, 10)
    console.log("使用async与await关键字", result)
}

fn()