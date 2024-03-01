<template>
  <div class="home">Home</div>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue'
  import { useRouter } from 'vue-router'
  // 借助 router 的实例方法，通过编写代码来实现路由导航
  // 不使用 <router-link> 创建 a 标签来定义导航链接
  // 编程式导航里最重要的两个属性 $route 和 $router 变成了两个hooks：useRoute 和 useRouter
  // 分别对应的是：当前路由实例route 和 路由器router
  const router = useRouter()
  onMounted(() => {
    // home路由组件挂载后3s跳转到news路由组件
    setTimeout(() => {
      router.push('/news')
    }, 3000)
  })
</script>

<style scoped lang="scss">
  .home {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
</style>
