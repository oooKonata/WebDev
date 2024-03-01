<template>
  <div class="detail">
    <ul class="news-list">
      <li>编号：{{ id }}</li>
      <li>标题：{{ title }}</li>
      <li>内容：{{ content }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  defineProps(['id', 'title', 'content'])
</script>

<style scoped lang="scss">
  .news-list {
    list-style: none;
    padding-left: 20px;
    li {
      line-height: 30px;
    }
  }
</style>
