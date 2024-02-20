// 引入createApp函数用于创建应用实例
import { createApp } from 'vue'
// 引入根组件
import App from './App.vue'
// 创建应用实例
const app = createApp(App)
// 挂载应用
app.mount('#app')
