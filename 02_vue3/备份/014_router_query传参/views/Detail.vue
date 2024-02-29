<template>
  <div class="detail">
    <ul class="news-list">
      <li>编号：{{ query.id }}</li>
      <li>标题：{{ query.title }}</li>
      <li>内容：{{ query.content }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  import { useRoute } from 'vue-router'
  import { toRefs } from 'vue'
  let route = useRoute()
  let { query } = toRefs(route)
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
