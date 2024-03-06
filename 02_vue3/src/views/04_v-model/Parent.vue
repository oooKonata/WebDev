<template>
  <div class="parent">
    <div class="title">父组件</div>
    <div>账号：{{ username }}</div>
    <div>密码：{{ password }}</div>
    <!-- v-model用在html标签上的本质 -->
    <!-- <input type="text" v-model="username"> -->
    <!-- <input type="text" :value="username" @input="username = (<HTMLInputElement>$event.target).value"> -->

    <!-- v-model用在组件标签上的本质：:modelValue + update:modelValue自定义事件 -->
    <!-- <AtguiguInput v-model="username"/> -->
    <!-- <AtguiguInput 
      :modelValue="username" 
      @update:modelValue="username = $event"
    /> -->
    <!-- 修改modelValue -->
    <Child v-model:usn="username" v-model:psd="password" />
  </div>
</template>

<script setup lang="ts" name="Parent">
  import { ref } from 'vue'
  import Child from './Child.vue'
  /* 
    v-model: 实现“父子”之间相互通信
      - v-model用在组件标签上的本质是 :modelValue + update:modelValue自定义事件
  */
  // 数据
  let username = ref('')
  let password = ref('')
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
./Child.vue
