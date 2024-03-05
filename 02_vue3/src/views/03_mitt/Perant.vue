<template>
  <div class="parent">
    <div class="title">父组件</div>
    <Child1 />
    <Child2 />
  </div>
</template>

<script setup lang="ts" name="Perant">
  import Child1 from './Child1.vue'
  import Child2 from './Child2.vue'
</script>

<style scoped lang="scss">
  .parent {
    .title {
      font-size: 20px;
      font-weight: 900;
      margin-bottom: 16px;
    }
    .child1,
    .child2 {
      margin-top: 20px;
    }
    background-color: #f5f5f5;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
  }
</style>
