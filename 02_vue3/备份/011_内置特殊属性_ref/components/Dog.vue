<template>
  <div class="dog">
    <div>dog name: {{ name }}</div>
    <div>dog age: {{ age }}</div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  let name = ref('Yellow')
  let age = ref(2)
  // defineExpose将组件中的数据交给外部
  defineExpose({ name, age })
</script>

<style scoped lang="scss">
  .dog {
    width: 30%;
    padding: 10px;
    margin: 25px 0;
    border-radius: 8px;
    background-color: cyan;
  }
</style>
