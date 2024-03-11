<template>
  <div class="container">
    <div class="title">Vue3新组件Teleport</div>
    <div>
      <MyModal />
    </div>
  </div>
</template>

<script setup lang="ts">
  import MyModal from './components/MyModal.vue'
</script>

<style scoped lang="scss">
  .container {
    background-color: #f5f5f5;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
  }
</style>
