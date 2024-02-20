<template>
  <div class="app">
    <h1>Hello Vue</h1>
  </div>
</template>

<script lang="ts">
  export default {
    // 指定组件名，不指定时默认使用组件文件名
    name: 'App',
  }
</script>

<style scoped lang="scss">
  .app {
    h1 {
      color: red;
    }
  }
</style>
