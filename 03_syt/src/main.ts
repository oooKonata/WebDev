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
// ElementPlus全局配置国际化的配置(设置组件语言-默认英文)
// @ts-ignore // 忽略下一行的ts检查
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

// 创建应用实例
const app = createApp(App)

// 全局注册组件
app.component('HospitalTop', HospitalTop)
app.component('HospitalBottom', HospitalBottom)

// 安装路由器
app.use(router)
// 安装element-plus插件
app.use(ElementPlus, {
  // 组件语言配置成中文
  locale: zhCn,
})

// 挂载
app.mount('#app')
