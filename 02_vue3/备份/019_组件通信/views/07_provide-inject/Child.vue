<template>
  <div class="child">
    <div class="title">子组件</div>
    <GrandChild />
  </div>
</template>

<script setup lang="ts" name="Child">
  import GrandChild from './GrandChild.vue'
</script>

<style scoped lang="scss">
  .child {
    .title {
      font-size: 20px;
      font-weight: 900;
      margin-bottom: 16px;
    }
    margin-top: 20px;
    background-color: #ddd;
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 10px;
  }
</style>
