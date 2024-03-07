<template>
  <div class="parent">
    <div class="title">父组件</div>
    <div>参考"@/备份/018_pinia"</div>
  </div>
</template>

<script setup lang="ts" name="Parent"></script>

<style scoped lang="scss">
  .parent {
    .title {
      font-size: 20px;
      font-weight: 900;
      margin-bottom: 16px;
    }
    background-color: #f5f5f5;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
  }
</style>
