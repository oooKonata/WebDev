<template>
  <div class="child1">
    <div class="title">子组件1</div>
    <div>玩具：{{ toy }}</div>
    <div>书籍：{{ book }} 本</div>
    <button @click="minusHouse($parent)">干掉父亲的1套房</button>
  </div>
</template>

<script setup lang="ts" name="Child1">
  import { ref } from 'vue'
  // 数据
  let toy = ref('奥特曼')
  let book = ref(3)

  // 方法
  function minusHouse(parent: any) {
    parent.house -= 1
  }

  // 把数据交给外部
  defineExpose({ toy, book })
</script>

<style scoped lang="scss">
  .child1 {
    .title {
      font-size: 20px;
      font-weight: 900;
      margin-bottom: 16px;
    }
    margin-top: 20px;
    background-color: #ddd;
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 10px;
    button {
      font-size: 14px;
      margin: 16px 5px 0 0;
      padding: 10px;
      border: 1px solid #bbb;
      border-radius: 6px;
    }
  }
</style>
