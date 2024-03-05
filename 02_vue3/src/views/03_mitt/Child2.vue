<template>
  <div class="child2">
    <div class="title">子组件2</div>
    <div>电脑：{{ computer }}</div>
    <div v-show="toy">哥哥给的玩具：{{ toy }}</div>
    <!-- 触发事件，并将数据传递给自定义事件send-computer -->
    <button @click="emitter.emit('send-computer', computer)">电脑给哥哥</button>
  </div>
</template>

<script setup lang="ts" name="Child2">
  import { ref, onUnmounted } from 'vue'
  import emitter from '@/utils/emitter'
  // 数据
  let computer = ref('联想')
  let toy = ref('')

  // 给emitter绑定send-toy事件，并接收自定义事件传递过来的数据
  emitter.on('send-toy', (value: any) => {
    toy.value = value
  })
  // 在组件卸载时解绑send-toy事件
  onUnmounted(() => {
    emitter.off('send-toy')
  })
</script>

<style scoped lang="scss">
  .child2 {
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
