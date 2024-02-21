<template>
  <div class="person">
    <h2>姓名: {{ person.name }}</h2>
    <h2>年龄: {{ person.age }}</h2>
    <h3>宠物: {{ person.pets.dog }} & {{ person.pets.cat }}</h3>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">显示电话</button>
    <button @click="changeDog">给汪星人换个名字</button>
    <button @click="changeCat">给喵星人换个名字</button>
  </div>
</template>

<script setup lang="ts" name="Person">
  /* 
    返回值是一个Proxy实例对象
      - 只能定义响应式对象，不能用来定义基本类型响应式变量，基本类型用ref
      - reactive定义的响应式数据是“深层次”的
  */
  // 引入reactive，定义响应式对象
  import { reactive } from 'vue'
  // 数据
  let person = reactive({
    name: 'zhangsan',
    age: 18,
    tel: '18700008888',
    pets: {
      dog: 'Husky',
      cat: 'Siam',
    },
  })
  // 方法
  function changeName() {
    person.name += '~'
  }
  function changeAge() {
    person.age += 1
  }
  function showTel() {
    alert(person.tel)
  }
  function changeDog() {
    person.pets.dog += '~'
  }
  function changeCat() {
    person.pets.cat += '~'
  }
</script>

<style scoped lang="scss">
  .person {
    button {
      margin-right: 10px;
    }
  }
</style>
