<template>
  <div class="vue3-api">
    <div class="title">Vue3 Other API</div>
    <div>sum：{{ sum }}</div>
    <div>姓名：{{ person.name }}</div>
    <div>年龄：{{ person.age }}</div>
    <div>宠物颜色：{{ pets.color }}</div>
    <div>宠物种类：{{ pets.species.dog }}</div>
    <button @click="addSum">求和+1</button>
    <button @click="addPersonAge">年长1岁</button>
    <button @click="changePerson">换个人</button>
    <button @click="changeDogColor">换个毛色</button>
    <button @click="changeDog">换个狗</button>
    <div class="custom-ref">
      <div class="title">输入防抖</div>
      <input type="text" v-model="msg" placeholder="请输入" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { shallowRef, shallowReactive } from 'vue'
  import useMsgRef from './hooks/useMsgRef'
  /*
    shallowRef
      - 浅层 ref 的内部值将会原样存储和暴露（数据会更改并记录，但视图不会自动更新），不会被深层递归地转为响应式，只有对 .value 的访问是响应式的
      - 特点：只跟踪引用值的变化，不关心值内部的属性变化
    shallowReactive
      - 浅层响应式对象里只有根级别的属性是响应式的，属性的值会被原样存储和暴露
      - 特点：对象的顶层属性是响应式的，但嵌套对象的属性不是
    readonly
      - 创建一个对象（不管是普通对象还是响应式对象）的深只读副本，返回一个原值的只读代理、
      - 特点：对任何嵌套属性的访问都将是只读的，任何尝试修改这个对象的操作都会被阻止
      - 应用场景
        - 创建不可变的状态快照
        - 保护全局状态或配置不被修改
    shallowReadonly
      - 与 readonly 类似，但只作用于对象的顶层属性
      - 特点：只将对象的顶层属性设置为只读，对象内部的嵌套属性仍然是可变的
      - 应用场景
        - 适用于只需保护对象顶层属性的场景
    toRaw
      - 获取一个响应式对象的原始对象
      - 返回由 reactive()、readonly()、shallowReactive() 或 shallowReadonly() 创建的代理对应的原始对象
      - 特点：返回的对象不再是响应式的，不会触发视图更新
      - 应用场景
        - 在需要将响应式对象传递给非 Vue 的库或外部系统时，使用 toRaw 可以确保它们收到的是普通对象
    markRaw
      - 标记一个对象，使其永远不会变成响应式的
      - 应用举例
        - 例如使用 mockjs 时，为了防止误把 mockjs 变为响应式对象，可以使用 markRaw 去标记 mockjs
    customRef
      - 创建一个自定义的 ref，显式声明对其依赖追踪和更新触发的控制方式
      - customRef() 预期接收一个工厂函数作为参数，这个工厂函数接受 track 和 trigger 两个函数作为参数，并返回一个带有 get 和 set 方法的对象
      - 一般来说，track() 应该在 get() 方法中调用，而 trigger() 应该在 set() 中调用。
      - 见vue官网：https://cn.vuejs.org/api/reactivity-advanced.html#customref
  */
  // 数据
  let sum = shallowRef(0)
  let person = shallowRef({
    name: 'oooKonata',
    age: 18,
  })
  let pets = shallowReactive({
    color: 'white',
    species: {
      dog: '哈士奇',
      cat: '暹罗',
    },
  })
  // 使用
  let { msg } = useMsgRef('', 1000)
  // 方法
  function addSum() {
    sum.value += 1
    console.log('sum', sum.value)
  }
  function addPersonAge() {
    person.value.age += 1
    console.log('person.value.age', person.value.age)
  }
  function changePerson() {
    person.value = { name: 'oooTsukasa', age: 16 }
    console.log('person', person)
  }
  function changeDogColor() {
    pets.color += '~'
    console.log('pets.color', pets.color)
  }
  function changeDog() {
    pets.species.dog += '~'
    console.log('pets.species.dog', pets.species.dog)
  }
</script>

<style scoped lang="scss">
  .vue3-api {
    background-color: #f5f5f5;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    .title {
      font-size: 20px;
      font-weight: 900;
      margin-bottom: 16px;
    }
    button {
      font-size: 14px;
      padding: 10px;
      margin: 16px 5px 20px 0;
      padding: 10px;
      border: 1px solid #bbb;
      border-radius: 6px;
    }
    .custom-ref {
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
  }
</style>
