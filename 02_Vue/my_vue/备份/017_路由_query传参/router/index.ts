// 创建路由器并暴露

// 安装vue-router：npm i vue-router

// 1、引入createRouter和createWebHashHistory
import { createRouter, createWebHistory } from 'vue-router'

// 引入要呈现的组件
import Home from '@/pages/Home.vue'
import News from '@/pages/News.vue'
import About from '@/pages/About.vue'
import Detail from '@/pages/Detail.vue'

// 2、创建路由器
const router = createRouter({
  // 路由器工作模式
  history: createWebHistory(),
  // 路由规则
  routes: [
    {
      name: 'home',
      path: '/home',
      component: Home,
    },
    {
      name: 'news',
      path: '/news',
      component: News,
      children: [
        {
          name: 'detail',
          path: 'detail',
          component: Detail,
        },
      ],
    },
    {
      name: 'about',
      path: '/about',
      component: About,
    },
  ],
})
// 暴露router
export default router
