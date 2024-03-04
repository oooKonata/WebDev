<template>
  <div class="child">
    <div class="title">子组件</div>
    <div>玩具：{{ toy }}</div>
    <!-- 父组件传递过来的car和sendToy() -->
    <div>父给的车：{{ car }}</div>
    <button @click="sendToy(toy)">把玩具给父组件</button>
  </div>
</template>

<script setup lang="ts" name="Child">
  import { ref } from 'vue'
  // 数据
  let toy = ref('奥特曼')
  // 声明接收props，props接收的属性或方法在模版中可以直接使用
  defineProps(['car', 'sendToy'])
</script>

<style scoped lang="scss">
  .child {
    .title {
      font-size: 20px;
      font-weight: 900;
      margin-bottom: 16px;
    }
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
