<template>
  <div class="person">
    <h2>人</h2>
    <Dog />
  </div>
</template>

<script setup lang="ts">
  import Dog from './Dog.vue'
</script>

<style scoped lang="scss">
  .person {
    background-color: cyan;
    width: 100%;
    padding: 10px;
    border-radius: 8px;
  }
</style>
