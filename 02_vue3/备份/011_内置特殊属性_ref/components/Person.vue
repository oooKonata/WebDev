<template>
  <div class="person">
    <h2>内置特殊属性ref：模版引用</h2>
    <input type="text" ref="input" placeholder="挂载后获取焦点" />
  </div>
  <Dog ref="dog" />
  <div v-if="dog">狗子：{{ dog.name }} {{ dog.age }}岁</div>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import Dog from './Dog.vue'
  /*
    在特定的DOM元素或子组件实例被挂载后，获得对它的直接引用
      1、用在普通DOM标签上，获取的是DOM节点
      2、用在组件标签上，获取的是组件实例对象
      
      注意：只可以在组件挂载后才能访问模板引用，初次渲染时是null
  */

  // 声明一个ref来存放该元素的引用
  let input = ref()
  let dog = ref()
  let myDog = ref()

  onMounted(() => {
    // input输入框挂载后获取焦点
    input.value.focus()
    console.log(input.value)
    console.log(dog.value.name, dog.value.age)
  })
</script>

<style scoped lang="scss"></style>
