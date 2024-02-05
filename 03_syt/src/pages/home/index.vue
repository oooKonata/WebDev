<template>
  <div>
    <!-- 首页轮播 -->
    <Carousel />
    <!-- 首页搜索 -->
    <Search />
    <!-- 底部导航 -->
    <el-row :gutter="20">
      <el-col :span="20">
        <!-- 医院等级 -->
        <Level />
        <!-- 医院地区 -->
        <Region />
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
</script>

<style scoped></style>
