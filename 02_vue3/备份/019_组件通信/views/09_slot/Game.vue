<template>
  <div class="game">
    <!-- <div class="title">游戏列表</div> -->
    <slot name="title">默认标题</slot>
    <!-- 
      插槽出口：标示父组件提供的插槽内容（slot content）的渲染位置
      作用域插槽：可以像props那样，在插槽出口上传递属性("name"为slot保留字段用于slot命名，不会作为props属性传递)
        - 接收插槽props时，接收到的是插槽props对象slotProps（包含全部props）
          1、默认插槽：v-slot="slotProps"
          2、具名插槽：v-slot:slotName="slotProps" 简写 #slotName="slotProps"
     -->
    <slot name="content" :games="games" :imgUrl="imgUrl" :videoUrl="videoUrl"
      >默认内容</slot
    >
  </div>
</template>

<script setup lang="ts" name="Game">
  import { ref, reactive } from 'vue'
  let games = reactive([
    { id: 'asgytdfats01', name: '英雄联盟' },
    { id: 'asgytdfats02', name: '王者农药' },
    { id: 'asgytdfats03', name: '红色警戒' },
    { id: 'asgytdfats04', name: '斗罗大陆' },
  ])
  let imgUrl = ref('https://z1.ax1x.com/2023/11/19/piNxLo4.jpg')
  let videoUrl = ref('https://media.w3.org/2010/05/sintel/trailer.mp4')
</script>

<style scoped lang="scss">
  .game {
    background-color: #ddd;
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 10px;
  }
</style>
