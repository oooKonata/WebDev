<template>
  <div class="child">
    <div class="title">子组件</div>
    <!--将接收的value（props）值赋给input元素的value属性，目的是：为了呈现数据 -->
    <!--给input元素绑定原生input事件，触发input事件时，进而触发update:model-value事件-->
    <input
      type="text"
      :value="usn"
      @input="emit('update:usn', (<HTMLInputElement>$event.target).value)"
      placeholder="用户名"
    />
    <input
      type="text"
      :value="psd"
      @input="emit('update:psd', (<HTMLInputElement>$event.target).value)"
      placeholder="密码"
    />
  </div>
</template>

<script setup lang="ts" name="Child">
  defineProps(['usn', 'psd'])
  const emit = defineEmits(['update:usn', 'update:psd'])
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
    input {
      font-size: 14px;
      height: 38px;
      width: 240px;
      border: 1px solid #bbb;
      border-radius: 6px;
      margin-right: 5px;
      padding: 0 0 0 12px;
    }
    input:focus-visible {
      outline: 0px;
      border: 1px solid rgb(33, 44, 253);
    }
  }
</style>
