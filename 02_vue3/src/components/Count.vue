<template>
  <div class="count">
    <div class="title">求和：{{ countStore.sum }}</div>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">加</button>
    <button @click="minus">减</button>
  </div>
</template>

<script setup lang="ts">
  import { useCountStore } from '@/store/count'
  import { ref } from 'vue'
  // 数据
  const countStore = useCountStore()
  let n = ref(1) // 用户选择的数字，默认为1

  // 方法
  function add() {
    countStore.sum += n.value
  }
  function minus() {
    countStore.sum -= n.value
  }
</script>

<style scoped scss>
  .count {
    background-color: #f5f5f5;
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 8px;
    .title {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 20px;
    }
    select {
      height: 32px;
      width: 64px;
      margin-right: 5px;
    }
    button {
      width: 48px;
      height: 32px;
      margin-right: 5px;
    }
  }
</style>
