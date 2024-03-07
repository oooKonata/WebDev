<template>
  <div class="parent">
    <div class="title">父组件</div>
    <div class="content">
      <Game>
        <!-- 具名插槽 -->
        <template v-slot:title>
          <div class="title">热门游戏</div>
        </template>
        <!-- 接收插槽props对象 -->
        <template v-slot:content="slotProps">
          <div v-for="game in slotProps.games" :key="game.id">
            {{ game.name }}
          </div>
        </template>
      </Game>
      <Game>
        <!-- 具名插槽 简写 -->
        <template #title>
          <div class="title">美食推荐</div>
        </template>
        <!-- 接收插槽props对象 简写 -->
        <template #content="slotProps">
          <img :src="slotProps.imgUrl" alt="美食图片" />
        </template>
      </Game>
      <Game>
        <!-- 具名插槽 简写 -->
        <template #title>
          <div class="title">视频推荐</div>
        </template>
        <!-- 接收插槽props对象 简写 -->
        <template #content="slotProps">
          <video :src="slotProps.videoUrl" controls loop autoplay muted></video>
        </template>
      </Game>
    </div>
  </div>
</template>

<script setup lang="ts" name="Parent">
  import Game from './Game.vue'
</script>

<style scoped lang="scss">
  .parent {
    background-color: #f5f5f5;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    .title {
      font-size: 20px;
      font-weight: 900;
      margin-bottom: 16px;
    }
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 20px;
      .title {
        font-size: 18px;
        font-weight: 900;
        margin-bottom: 16px;
      }
      img,
      video {
        width: 100%;
      }
    }
  }
</style>
