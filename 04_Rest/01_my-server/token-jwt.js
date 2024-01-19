// 引入jwt
const jwt = require("jsonwebtoken")

// 创建需要被加密的对象
const obj = {
    name: "孙悟空",
    age: 18,
    gender: "男"
}

// 使用jwt对json进行加密
// 加密(签名sign)对象，密钥，配置对象（如过期时间）
const token = jwt.sign(
    obj,
    "hello", {
    expiresIn: "1d"
})

console.log(token)

// 解密（验证verify）对象
// 解密时要注意token可能过期了
try {
    const decodeData = jwt.verify(token, "hello")

    console.log(decodeData)
} catch (err) {
    console.log("无效的token", err)
}