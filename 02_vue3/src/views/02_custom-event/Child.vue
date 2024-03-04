<template>
  <div class="child">
    <div class="title">子组件</div>
    <div>玩具：{{ toy }}</div>
    <!-- 使用emit触发自定义事件，后面为传给自定义事件的数据，可以为任意类型 -->
    <button @click="emit('send-toy', toy, 'test', 18, ['a', 'b', { c: 9 }])">
      把玩具给父组件
    </button>
  </div>
</template>

<script setup lang="ts" name="Child">
  import { ref } from 'vue'
  // 数据
  let toy = ref('奥特曼')
  // 声明事件，接收父组件传入的自定义事件
  const emit = defineEmits(['send-toy'])
</script>

<style scoped lang="scss">
  .child {
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
