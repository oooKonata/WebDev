/* 
function sum(a, b) {
    //获取当前时间戳
    const begin = Date.now()
    //while循环占用3秒时间，同步
    while (Date.now() - begin < 3000) {
    }
    //3秒后才执行返回结果
    return a + b
}
 */


//异步函数：无法使用return设置返回值，需通过回调函数来返回结果，不会阻塞进程 
function sum(a, b ,cb) {
    // setTimeout进入队列，异步执行，无返回值
    setTimeout(() => {
        //回调函数
        cb(a + b)
    }, 1000);
}
console.log("111")

//求和
//回调地狱
//可用Promise对象来代替回调函数的返回结果
sum(123, 456, (result) => {
    console.log(result)
    // 求和之后再次求和
    sum(result, 7, (result) => {
        console.log(result)
        //再次求和
        sum(result, 8, (result) => {
            console.log(result)
            //再次求和
            sum(result, 9, (result) => {
                console.log(result)
                //再次求和
                sum(result, 10, (result) => {
                    console.log(result)
                })
            })
        })
    })
})

console.log("222")