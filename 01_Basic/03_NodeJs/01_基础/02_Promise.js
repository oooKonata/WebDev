function sum(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 3000);
    })
}

//3秒后第一个then的result为579，后续无延迟，以此计算得出结果，避免回调地狱
sum(123, 456).then(result => {
    console.log(result)
    return result + 7
}).then(result => {
    console.log(result)
    return result + 8 
}).then(result => {
    console.log(result)
    return result + 9
}).then(result => {
    console.log(result)
    return result + 10
})
