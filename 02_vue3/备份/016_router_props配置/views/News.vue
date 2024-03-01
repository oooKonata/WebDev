<template>
  <div class="news">
    <!-- 导航区 -->
    <ul>
      <li v-for="news in newsList" :key="news.id">
        <!-- params传参：to的字符串写法 -->
        <!-- <RouterLink :to="`/news/detail/${news.id}/${news.title}/${news.content}`">{{ news.title }}</RouterLink> -->
        <!-- params传参：to的对象写法 -->
        <RouterLink
          :to="{
            // to的对象写法，params传参只能用name配置项，不能用path指定路由
            // 路由规则里要提前占位 detail/:id/:title/:content
            name: 'detail',
            params: {
              id: news.id,
              title: news.title,
              content: news.content,
            },
          }"
          >{{ news.title }}</RouterLink
        >
      </li>
    </ul>
    <!-- 展示区 -->
    <div class="news-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { reactive } from 'vue'
  import { RouterView, RouterLink } from 'vue-router'

  const newsList = reactive([
    { id: 'asfdtrfay01', title: '很好的抗癌食物', content: '西蓝花' },
    { id: 'asfdtrfay02', title: '如何一夜暴富', content: '学IT' },
    { id: 'asfdtrfay03', title: '震惊，万万没想到', content: '明天是周一' },
    { id: 'asfdtrfay04', title: '好消息！好消息！', content: '快过年了' },
  ])
</script>

<style scoped lang="scss">
  .news {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    height: 100%;
    ul {
      margin-top: 30px;
      list-style: none;
      padding-left: 10px;
      li {
        a {
          font-size: 18px;
          line-height: 40px;
          text-decoration: none;
          color: green;
        }
      }
    }
  }
  .news-content {
    color: #333;
    width: 70%;
    height: 90%;
    border: 1px solid #999;
    margin-top: 20px;
    border-radius: 10px;
  }
</style>
