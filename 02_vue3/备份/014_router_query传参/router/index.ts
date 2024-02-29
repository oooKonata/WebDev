// 引入createRouter函数创建路由器实例
import { createRouter, createWebHashHistory } from 'vue-router'
// 引入路由组件
import Home from '@/views/Home.vue'
import News from '@/views/News.vue'
import About from '@/views/About.vue'
import Detail from '@/views/Detail.vue'
// 创建路由器
const router = createRouter({
  // 路由器工作模式
  history: createWebHashHistory(),
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
      // 嵌套路由
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
