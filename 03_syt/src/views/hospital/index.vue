<template>
  <div class="hospital">
    <!-- 菜单 -->
    <div class="menu">
      <div class="top">
        <el-icon size="16"><home-filled /></el-icon>
        <span>/ 医院信息</span>
      </div>
      <el-menu :default-active="$route.path" class="el-menu-vertical-demo">
        <el-menu-item
          index="/hospital/register"
          @click="changeActive('/hospital/register')"
        >
          <el-icon><calendar /></el-icon>
          <span>预约挂号</span>
        </el-menu-item>
        <el-menu-item
          index="/hospital/detail"
          @click="changeActive('/hospital/detail')"
        >
          <el-icon><document /></el-icon>
          <span>医院详情</span>
        </el-menu-item>
        <el-menu-item
          index="/hospital/notice"
          @click="changeActive('/hospital/notice')"
        >
          <el-icon><Setting /></el-icon>
          <span>预约须知</span>
        </el-menu-item>
        <el-menu-item
          index="/hospital/close"
          @click="changeActive('/hospital/close')"
        >
          <el-icon><warning /></el-icon>
          <span>停诊信息</span>
        </el-menu-item>
        <el-menu-item
          index="/hospital/search"
          @click="changeActive('/hospital/search')"
        >
          <el-icon><search /></el-icon>
          <span>查询/取消</span>
        </el-menu-item>
      </el-menu>
    </div>
    <!-- 路由内容 -->
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
  import {
    HomeFilled,
    Calendar,
    Document,
    Setting,
    Warning,
    Search,
  } from '@element-plus/icons-vue'
  import { useRouter, useRoute } from 'vue-router'
  // 获取路由器
  const router = useRouter()
  // 获取当前路由信息
  const route = useRoute()
  console.log(route.path)

  // 菜单回调函数
  const changeActive = (path: string) => {
    router.push(path)
  }
</script>

<style scoped lang="scss">
  .hospital {
    display: flex;
    .menu {
      flex: 2;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      .top {
        font-size: 14px;
        color: #999;
        margin: 30px 0 20px 4px;
        display: flex;
        align-items: center;
        span {
          margin-left: 4px;
        }
      }
      .el-menu {
        border-right: 0;
        .el-menu-item {
          padding: 0;
        }
      }
    }
    .content {
      flex: 8;
    }
  }
</style>
