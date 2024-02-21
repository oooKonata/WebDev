<template>
  <div class="person">
    <h2>姓名: {{ name }}</h2>
    <h2>年龄: {{ age }}</h2>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">显示电话</button>
  </div>
</template>

<script setup lang="ts" name="Person">
  /* 
    返回值是RefImpl的实例对象，ref对象的value属性是响应式的
      - JS中操作数据需要 xxx.value，模版中会自动解包，不需要 .value，直接使用
      - let name = ref('zhangsan')中，name不是响应式的，name.value是响应式的
  */
  // 引入ref，定义响应式变量
  import { ref } from 'vue'
  // 数据
  let name = ref('zhangsan')
  let age = ref(18)
  let tel = ref('18700008888')
  // 方法
  function changeName() {
    name.value += '~'
  }
  function changeAge() {
    age.value += 1
  }
  function showTel() {
    alert(tel.value)
  }
</script>

<style scoped lang="scss">
  .person {
    button {
      margin-right: 10px;
    }
  }
</style>
