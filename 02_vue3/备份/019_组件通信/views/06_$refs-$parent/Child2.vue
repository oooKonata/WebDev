<template>
  <div class="child2">
    <div class="title">子组件2</div>
    <div>电脑：{{ computer }}</div>
    <div>书籍：{{ book }} 本</div>
    <button @click="addHouse($parent)">给父组件买1套房</button>
  </div>
</template>

<script setup lang="ts" name="Child2">
  import { ref } from 'vue'
  // 数据
  let computer = ref('联想')
  let book = ref(6)
  // 方法
  function addHouse(parent: any) {
    parent.house += 1
  }
  // 把数据交给外部
  defineExpose({ computer, book })
</script>

<style scoped lang="scss">
  .child2 {
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
