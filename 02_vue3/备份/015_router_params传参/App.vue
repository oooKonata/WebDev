<template>
  <div class="app">
    <Header />
    <!-- 导航 -->
    <div class="nav">
      <!-- to的字符串写法：必须写完整路径 -->
      <router-link to="/home" active-class="active">首页</router-link>
      <!-- to的对象写法 -->
      <router-link :to="{ path: '/news' }" active-class="active"
        >新闻</router-link
      >
      <!-- to的对象写法：配合命名路由的name属性，嵌套路由时有优势 -->
      <router-link :to="{ name: 'about' }" active-class="active"
        >关于</router-link
      >
    </div>
    <!-- 展示 -->
    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
  import Header from './components/Header.vue'
  import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped lang="scss">
  .nav {
    display: flex;
    justify-content: space-around;
    margin: 0 100px;
    a {
      display: block;
      text-align: center;
      width: 120px;
      height: 40px;
      line-height: 40px;
      border-radius: 10px;
      background-color: #eee;
      text-decoration: none;
      color: #999;
      font-size: 18px;
    }
    a.active {
      background-color: green;
      color: white;
      font-weight: 900;
    }
  }
  .main-content {
    margin: 0 auto;
    margin-top: 30px;
    border-radius: 10px;
    width: 90%;
    height: 400px;
    border: 1px solid #999;
  }
</style>
