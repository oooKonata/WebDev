/* 
    package.json
        - package.json是包的描述文件
        - node中通过该文件对项目进行描述
        - 每个node项目中必须有package.json
        - 相关参数
            - name 项目名
            - version 版本号
            - description 项目描述
            - main 文件入口
            - scripts 自定义命令
                - 定义后通过npm执行
                - start 和 test 直接通过 npm start 或npm test执行
                - 其他自定义命令通过 npm run <命令> 执行
            - author 项目作者
            - license 版权

    npm CLI（命令行）
        - npm init 初始化项目，创建packgae.json文件，手动设置配置
        - npn init -y 初始化项目（采用默认值配置）
        - npm install <包名>@x.x.x 下载指定包指定版本到当前目录
            - npm install 将执行：
                1、将指定包下载到当前node_modules目录下
                2、在package.json的dependencies属性中添加一个新属性
                    "<包名>": "^<版本号>" 如："lodash": "^4.17.21"
                3、自动添加package-lock.json文件（帮助npm加速下载的文件，不用动）
    
    npm install 自动安装所有依赖
    npm install <包名> -g 全局安装
        - 全局安装是将包安装到计算机
        - 全局安装通常是一些工具类的包
    npm unistall <包名> 卸载指定包

    npm镜像
        1、本地系统中安装npm国内镜像
            - 将使用cnpm命令行工具代替默认的npm，但会产生多余的cnpm包文件，不推荐
            - npm install -g cnpm --registry=https://registry.npmmirror.com
        2、修改npm仓库地址为国内镜像
            - 包更新速度相对npm原仓库稍慢，但速度快，和默认npm几乎一致，推荐
            - npm config set registry https://registry.npmmirror.com
        3、还原原版npm仓库
            - npm config delete registry
*/

// 引入npm安装的包时，不需要写路径，直接写包名（当前目录没找到会去node_modules里面找）
// 工具类包用 _ 表示
const _ = require("lodash")
// console.log(_)