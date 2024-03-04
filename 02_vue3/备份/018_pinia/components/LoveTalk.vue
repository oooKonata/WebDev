<template>
  <div class="talk">
    <button @click="getLoveTalk">获取一句土味情话</button>
    <ul>
      <li v-for="talk in talkList" :key="talk.id">{{ talk.title }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  import { useTalkStore } from '@/store/loveTalk'
  import { storeToRefs } from 'pinia'
  // 数据
  const talkStore = useTalkStore()
  const { talkList } = storeToRefs(talkStore)
  // 侦听store
  talkStore.$subscribe(() => {
    localStorage.setItem('talk', JSON.stringify(talkList.value))
  })
  // 方法
  function getLoveTalk() {
    talkStore.getATalk()
  }
</script>

<style scoped scss>
  .talk {
    background-color: #f5f5f5;
    padding: 20px;
    border-radius: 10px;
    button {
      margin-bottom: 20px;
    }
    ul {
      padding: 0;
      margin: 0;
      li {
        list-style-type: none;
      }
    }
  }
</style>
