<template>
  <div class="parent">
    <div class="title">父组件</div>
    <div v-show="toy">子给的玩具：{{ toy }}</div>
    <!-- 
      给子组件Child绑定自定义事件 
      可以理解为父组件注册了一个函数，但是它不会自己去执行这个函数，它需要收到一个信号才会自己去执行
      该信号在需要的地方（比如子组件）触发发出
    -->
    <Child @send-toy="saveToy" />
  </div>
</template>

<script setup lang="ts" name="Parent">
  import Child from './Child.vue'
  import { ref } from 'vue'
  /*
    自定义事件：子传父
      - 原生事件
          1、事件名是特定的（click、mouseEnter等）
          2、事件对象 $event 是包含事件相关信息的对象（如pagaX、pageY、target、keyCode等）
      - 自定义事件
          1、事件名是任意的
          2、事件对象 $event 是调用emit是所提供的数据，可以是任意类型
  */
  // 数据
  let toy = ref('')
  // 注册saveToy函数，设置形参接收自定义事件触发后子组件传递过来的数据
  function saveToy(value: string, ...arg: any) {
    console.log('saveToy', value, arg)
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
    background-color: #f5f5f5;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
  }
</style>
