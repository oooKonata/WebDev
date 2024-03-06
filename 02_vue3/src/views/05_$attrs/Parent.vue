<template>
  <div class="parent">
    <div class="title">父组件</div>
    <div>a：{{ a }}</div>
    <div>b：{{ b }}</div>
    <div>c：{{ c }}</div>
    <div>d：{{ d }}</div>
    <Child
      :a="a"
      :b="b"
      :c="c"
      :d="d"
      v-bind="{ x: 100, y: 200 }"
      :updateA="updateA"
    />
  </div>
</template>

<script setup lang="ts" name="Parent">
  import Child from './Child.vue'
  import { ref } from 'vue'

  let a = ref(1)
  let b = ref(2)
  let c = ref(3)
  let d = ref(4)

  function updateA(value: number) {
    a.value += value
  }
</script>

<style scoped lang="scss">
  .parent {
    .title {
      font-size: 20px;
      font-weight: 900;
      margin-bottom: 16px;
    }
    background-color: #f5f5f5;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
  }
</style>
