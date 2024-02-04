<template>
  <div class="container">
    <!-- 顶部全局组件 -->
    <HospitalTop />
    <!-- 展示路由组件 -->
    <div class="content">
      <!-- 展示路由组件区域 -->
      <router-view></router-view>
    </div>
    <!-- 底部全局组件 -->
    <HospitalBottom />
  </div>
</template>

<script setup lang='ts'>

</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;

  .content {
    margin-top: 64px;
    width: 1200px;
    // 最小高度
    min-height: 700px;
  }
}
</style>