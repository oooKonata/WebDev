<template>
  <div class="count">
    <div class="title">求和：{{ sum }}</div>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="countStore.add(n)">加</button>
    <button @click="countStore.minus(n)">减</button>
  </div>
</template>

<script setup lang="ts">
  import { useCountStore } from '@/store/count'
  import { storeToRefs } from 'pinia'
  import { ref, toRefs } from 'vue'
  // 数据，
  const countStore = useCountStore()
  // storeTorefs将store中的数据转为ref对象，方便在模版中使用
  // pinia中的storeTorefs只会将数据做转换
  const { sum } = storeToRefs(useCountStore())
  // vue中的toRefs会将store全部转化
  // const { sum, add, minus } = toRefs(useCountStore())
  let n = ref(1) // 用户选择的数字，默认为1
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
