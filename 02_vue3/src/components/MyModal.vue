<template>
  <button @click="isShow = true">模态弹框</button>
  <Teleport to="body">
    <div v-if="isShow" class="modal">
      <div>我是模态弹框</div>
      <button @click="isShow = false">关闭</button>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  const isShow = ref(false)
</script>

<style scoped lang="scss">
  .modal {
    position: fixed;
    z-index: 999;
    background-color: #fff;
    top: 20%;
    left: 50%;
    width: 240px;
    margin-left: -121px;
    padding: 20px;
    border: 1px solid #bbb;
    border-radius: 12px;
  }
  button {
    font-size: 14px;
    padding: 10px;
    margin: 16px 5px 0 0;
    padding: 10px;
    border: 1px solid #bbb;
    border-radius: 6px;
  }
</style>
