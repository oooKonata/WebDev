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
    toRefs与toRef
      - 将响应式对象中的属性，转换为ref对象
      - toRefs与toRef功能一样，只是toRefs是批量转换，toRef是指定特定属性转换
  */
  import { reactive, toRefs, toRef } from 'vue'
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
  let { name, age } = toRefs(person)
  let tel = toRef(person, 'tel')
  let pets = toRef(person, 'pets')
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
  function changeDog() {
    pets.value.dog += '~'
  }
  function changeCat() {
    pets.value.cat += '~'
  }
</script>

<style scoped lang="scss">
  .person {
    button {
      margin-right: 10px;
    }
  }
</style>
