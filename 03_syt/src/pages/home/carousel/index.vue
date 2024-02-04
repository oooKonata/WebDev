<template>
  <el-carousel height="350px">
    <el-carousel-item v-for="item in 3" :key="item">
      <img src="../../../assets/images/Link.jpg" alt="轮播图" />
    </el-carousel-item>
  </el-carousel>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
  img {
    width: 100%;
  }
</style>
