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
          // params传参，占位
          path: 'detail/:id/:title/:content',
          component: Detail,

          // props配置项

          // 第1种写法：布尔值写法，将路由收到的所有params参数作为props传给路由组件
          // props: true,

          // 第2种写法：函数写法，把返回的对象中每一组key-value作为props传给Detail组件
          props(route) {
            // return route.query
            // 可以自己决定将什么作为props给路由组件，query或者params
            return route.params
          },

          // 第3种写法：对象写法，把对象（自定义）中的每一组key-value作为props传给Detail组件
          /* props:{
            a:100,
            b:200,
            c:300
          } */
        },
        // 重定向
        {
          path: '/',
          redirect: '/home',
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
