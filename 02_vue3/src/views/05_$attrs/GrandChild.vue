<template>
  <div class="grand-child">
    <div class="title">孙组件</div>
    <div>a：{{ a }}</div>
    <div>b：{{ b }}</div>
    <div>c：{{ c }}</div>
    <div>d：{{ d }}</div>
    <div>x：{{ x }}</div>
    <div>y：{{ y }}</div>
    <button @click="updateA(6)">点我将爷爷那的a更新</button>
  </div>
</template>

<script setup lang="ts" name="GrandChild">
  defineProps(['a', 'b', 'c', 'd', 'x', 'y', 'updateA'])
</script>

<style scoped>
  .grand-child {
    .title {
      font-size: 20px;
      font-weight: 900;
      margin-bottom: 16px;
    }
    margin-top: 20px;
    background-color: #eee;
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
