import { createApp } from 'vue'
// 引入清除默认样式
import '@/style/reset.scss'
// 引入根组件App
import App from './App.vue'

// 引入全局组件（顶部、底部是全局组件）
import HospitalTop from '@/components/hospital_top/index.vue'
import HospitalBottom from '@/components/hospital_bottom/index.vue'

// 创建应用实例
const app = createApp(App)

// 全局注册组件
app.component('HospitalTop', HospitalTop)
app.component('HospitalBottom', HospitalBottom)

// 挂载
app.mount('#app')