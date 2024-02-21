<template>
  <div class="person">
    <h2>姓名: {{ name }}</h2>
    <h2>年龄: {{ age }}</h2>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">显示电话</button>
  </div>
</template>

<!-- <script lang="ts">
  /* 
    setup语法糖里不支持直接指定组件名，不指定默认就是vue组件文件的名字
      - 如需指定，需在一个不写setup的script标签里去指定
      - 可以借助vite中的插件简化
        1、第一步：npm i vite-plugin-vue-setup-extend -D
        2、第二步：配置vite.config.ts
                  - import { defineConfig } from 'vite'
                  - import VueSetupExtend from 'vite-plugin-vue-setup-extend'
                  - export default defineConfig({
                      plugins: [ VueSetupExtend() ]
                    })
        3、第三步：<script setup lang="ts" name="Person">
  */
  export default {
    name: 'Person',
  }
</script> -->

<script setup lang="ts" name="Person">
  /* 
  setup语法糖：在script标签中添加setup属性就可以直接使用setup语法糖
    - 使用setup语法糖后：
      1、不用写setup函数
      2、组件只需要引入不需要注册
      3、属性和方法不需要返回，可以直接在template模板中使用
    - setup语法糖中新增的api
      1、defineProps：子组件接收父组件中传来的props
      2、efineEmits：子组件调用父组件中的方法
      3、defineExpose：子组件暴露属性，可以在父组件中拿到
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
</script>

<style scoped lang="scss">
  .person {
    button {
      margin-right: 10px;
    }
  }
</style>
