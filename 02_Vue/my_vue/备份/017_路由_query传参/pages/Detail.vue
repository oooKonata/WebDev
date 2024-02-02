<template>
  <ul class="news-list">
    <li>编号：{{ query.id }}</li>
    <li>标题：{{ query.title }}</li>
    <li>内容：{{ query.content }}</li>
  </ul>
</template>

<script setup lang="ts" name="Detail">
import { useRoute } from 'vue-router'
import { toRefs } from 'vue';
// 获取当前路由地址
let route = useRoute()
// console.log(route.query);
let { query } = toRefs(route)


</script>

<style scoped>
.news-list {
  list-style: none;
  padding-left: 20px;
}

.news-list>li {
  line-height: 30px;
}
</style>
