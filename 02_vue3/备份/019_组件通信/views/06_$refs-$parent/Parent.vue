<template>
  <div class="parent">
    <div class="title">父组件</div>
    <div>房产：{{ house }}</div>
    <button @click="changeToy">修改Child1的玩具</button>
    <button @click="changeComputer">修改Child2的电脑</button>
    <button @click="getAllChild($refs)">让所有孩子的书变多</button>
    <Child1 ref="c1" />
    <Child2 ref="c2" />
  </div>
</template>

<script setup lang="ts" name="Parent">
  import Child1 from './Child1.vue'
  import Child2 from './Child2.vue'
  import { ref, reactive } from 'vue'
  /* 
    $refs: 值为对象，包含所有被ref标识（模版引用）的DOM元素或组件实例
    $parent: 值为对象，当前组件的父组件实例，若当前组件是顶层组件，则为null
     - 父组件通过模板引用获取到了该组件的实例时，会自动解包，不需要 .value
  */
  let c1 = ref()
  let c2 = ref()

  // 注意点：当访问obj.c的时候，底层会自动读取value属性，因为c是在obj这个响应式对象中的
  /* let obj = reactive({
		a:1,
		b:2,
		c:ref(3)
	})
	let x = ref(4)

	console.log(obj.a)
	console.log(obj.b)
	console.log(obj.c)
	console.log(x) */

  // 数据
  let house = ref(4)
  // 方法
  function changeToy() {
    c1.value.toy = '小猪佩奇'
  }
  function changeComputer() {
    c2.value.computer = '华为'
  }
  function getAllChild(refs: { [key: string]: any }) {
    console.log(refs)
    for (let key in refs) {
      refs[key].book += 3
    }
  }
  // 向外部提供数据
  defineExpose({ house })
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
    button {
      font-size: 14px;
      margin: 16px 5px 0 0;
      padding: 10px;
      border: 1px solid #bbb;
      border-radius: 6px;
    }
  }
</style>
