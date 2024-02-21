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
    ref可以定义的响应式数据：基本类型、对象类型
    ref定义的响应式数据是对象类型是，内部本质上是调用的reactive
    ref与reactive对比：
      - 宏观角度
        1、ref：基本类型、对象类型
        2、reactive：对象类型
      - 区别
        1、ref创建的变量JS中使用时必须使用.value（可以使用volar插件自动添加.value）
        2、reactive重新分配一个新对象，会失去响应式（可以使用Object.assign去整体替换）
      - 使用原则
        1、若需要一个基本类型的响应式数据，必须使用ref
        2、若需要一个响应式对象，层级不深，ref、reactive都可以
        3、若需要一个响应式对象，且层级较深，推荐使用reactive
  */
  // 引入ref，定义响应式对象
  import { ref } from 'vue'
  // 数据
  let person = ref({
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
    person.value.name += '~'
  }
  function changeAge() {
    person.value.age += 1
  }
  function showTel() {
    alert(person.value.tel)
  }
  function changeDog() {
    person.value.pets.dog += '~'
  }
  function changeCat() {
    person.value.pets.cat += '~'
  }
</script>

<style scoped lang="scss">
  .person {
    button {
      margin-right: 10px;
    }
  }
</style>
