<template>
  <div class="person">
    <h2>姓名: {{ name }}</h2>
    <h2>年龄: {{ age }}</h2>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">显示电话</button>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Person',
    setup() {
      console.log(this)
      /* 
        - setup中的this是undefine
        - vue2中直接写在data(){}里的数据直接写在setup中将不再是响应式数据
        - setup中的数据和方法需通过return交出去，在模版中才能访问
          - setup返回值
            1、对象：属性、方法等，在模版中可以直接使用
            2、函数：自定义渲染内容，如 return ()=>'哈哈哈，我是自定义内容'
        - vue2配置项（data、methods...）可以放问到setup中的属性、方法，但是反过来不行，有冲突时，setup将优先
      */
      // 数据
      let name = 'zhangsan'
      let age = 18
      let tel = '18700008888'
      // 方法
      function changeName() {
        name += '~'
        console.log(name)
      }
      function changeAge() {
        age += 1
        console.log(age)
      }
      function showTel() {
        alert(tel)
      }
      // 交出数据和方法
      return { name, age, changeName, changeAge, showTel }
    },
  }
</script>

<style scoped lang="scss">
  .person {
    button {
      margin-right: 10px;
    }
  }
</style>
