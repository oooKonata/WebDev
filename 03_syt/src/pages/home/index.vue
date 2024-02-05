<template>
  <div>
    <!-- 首页轮播 -->
    <Carousel />
    <!-- 首页搜索 -->
    <Search />
    <!-- 底部导航 -->
    <el-row :gutter="20">
      <el-col :span="20">
        <!-- 筛选：医院等级 -->
        <Level />
        <!-- 筛选：医院地区 -->
        <Region />
        <!-- 医院展示（卡片） -->
        <div class="hospital">
          <Card v-for="item in 8" :key="item" />
        </div>
      </el-col>
      <el-col :span="4">222</el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
  // 首页轮播
  import Carousel from './carousel/index.vue'
  // 首页搜索
  import Search from './search/index.vue'
  // 医院等级
  import Level from './level/index.vue'
  // 医院地区
  import Region from './region/index.vue'
  // 医院展示（卡片）
  import Card from './card/index.vue'
</script>

<style scoped lang="scss">
  .hospital {
    margin: 10px 0 20px 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
</style>
