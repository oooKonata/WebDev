<template>
  <div class="child1">
    <div class="title">子组件1</div>
    <div>玩具：{{ toy }}</div>
    <div v-show="computer">弟弟给的电脑：{{ computer }}</div>
    <!-- 触发事件，并将数据传递给自定义事件send-toy -->
    <button @click="emitter.emit('send-toy', toy)">玩具给弟弟</button>
  </div>
</template>

<script setup lang="ts" name="Child1">
  import { ref, onUnmounted } from 'vue'
  import emitter from '@/utils/emitter'

  // 数据
  let toy = ref('奥特曼')
  let computer = ref('')
  // 给emitter绑定send-computer事件，并接收自定义事件传递过来的数据
  emitter.on('send-computer', (value: any) => {
    computer.value = value
  })
  // 在组件卸载时解绑send-computer事件
  onUnmounted(() => {
    emitter.off('send-computer')
  })
</script>

<style scoped lang="scss">
  .child1 {
    .title {
      font-size: 20px;
      font-weight: 900;
      margin-bottom: 16px;
    }
    margin-top: 20px;
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
