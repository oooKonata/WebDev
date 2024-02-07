<template>
  <div class="search">
    <el-autocomplete clearable placeholder="请输入医院名称" />
    <el-button type="primary" size="default" :icon="Search">搜索</el-button>
  </div>
</template>

<script setup lang="ts">
  import { Search } from '@element-plus/icons-vue'
</script>

<style scoped lang="scss">
  .search {
    margin-top: 16px;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    // ::v-deep深度选择
    ::v-deep(.el-input__wrapper) {
      width: 600px;
      margin-right: 10px;
    }
  }
</style>
