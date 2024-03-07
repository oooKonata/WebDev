<template>
  <div class="parent">
    <div class="title">父组件</div>
    <div>a：{{ a }}</div>
    <div>b：{{ b }}</div>
    <div>c：{{ c }}</div>
    <div>d：{{ d }}</div>
    <Child
      :a="a"
      :b="b"
      :c="c"
      :d="d"
      v-bind="{ x: 100, y: 200 }"
      :updateA="updateA"
    />
  </div>
</template>

<script setup lang="ts" name="Parent">
  import Child from './Child.vue'
  import { ref } from 'vue'
  /* 
    属性透传：给一个组件传递属性或事件，该组件没有用props或emits接收的属性或事件都会被放在$attrs对象中
      - 单元素为根节点的组件被透传属性时，透传属性会自动被加到根元素上作为标签属性，常见如class、style、id等
      - 多元素为根节点的组件被透传属性时，不会自动透传，需显式绑定$attrs给要被透传属性的组件
      - 多级属性透传时，注意$attrs会自动排除props或emits声明的属性或事件
  */
  let a = ref(1)
  let b = ref(2)
  let c = ref(3)
  let d = ref(4)

  function updateA(value: number) {
    a.value += value
  }
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
