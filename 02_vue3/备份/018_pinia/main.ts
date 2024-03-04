// 引入createApp函数用于创建应用实例
import { createApp } from 'vue'
// 引入createPinia函数用于创建pinia
import { createPinia } from 'pinia'
// 引入根组件
import App from './App.vue'
// 创建应用实例
const app = createApp(App)
// 创建pinia实例
const pinia = createPinia()
// 使用插件pinia
app.use(pinia)
// 挂载应用
app.mount('#app')
