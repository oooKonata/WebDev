import { createApp } from 'vue'
// 引入清除默认样式
import '@/style/reset.scss'
// 引入根组件App
import App from './App.vue'

// 引入全局组件（顶部、底部是全局组件）
import HospitalTop from '@/components/hospital_top/index.vue'
import HospitalBottom from '@/components/hospital_bottom/index.vue'

// 引入路由器
import router from '@/router'
// 引入element-plus插件和样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入IconPark样式组件-字节跳动样式库
import '@icon-park/vue/styles/index.css'

// 创建应用实例
const app = createApp(App)

// 全局注册组件
app.component('HospitalTop', HospitalTop)
app.component('HospitalBottom', HospitalBottom)

// 安装路由器
app.use(router)
// 安装element-plus插件
app.use(ElementPlus)

// 挂载
app.mount('#app')
