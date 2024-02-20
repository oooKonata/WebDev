<template>
  <div class="app">
    <Person />
  </div>
</template>

<script lang="ts">
  import Person from './components/Person.vue'
  export default {
    // 指定组件名，不指定时默认使用组件文件名
    name: 'App',
    // 注册组件
    components: { Person },
  }
</script>

<style scoped lang="scss"></style>
