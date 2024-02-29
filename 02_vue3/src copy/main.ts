// 引入createApp函数用于创建应用实例
import { createApp } from 'vue'
// 引入根组件
import App from './App.vue'
// 引入路由器
import router from './router'
// 创建应用实例
const app = createApp(App)
// 使用路由器
app.use(router)
// 挂载应用
app.mount('#app')
