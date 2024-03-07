<template>
  <div class="parent">
    <div class="title">父组件</div>
    <div>汽车：{{ car }}</div>
    <div v-show="toy">子给的玩具：{{ toy }}</div>
    <Child :car="car" :sendToy="getToy" />
  </div>
</template>

<script setup lang="ts" name="Parent">
  import Child from './Child.vue'
  import { ref } from 'vue'
  /* 
    props：父传子
      - 属性值为非函数：父传子
      - 属性值为函数：子传父（实际是父给子传了1个函数，子组件使用函数时，给函数的参数，传递给了父组件）
  */
  // 数据
  let car = ref('奔驰')
  let toy = ref('')
  // 方法
  function getToy(value: string) {
    // value是子组件传递过来的
    toy.value = value
  }
</script>

<style scoped lang="scss">
  .parent {
    .title {
      font-size: 20px;
      font-weight: 900;
      margin-bottom: 16px;
    }
    .child {
      margin-top: 20px;
    }
    background-color: #f5f5f5;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
  }
</style>
