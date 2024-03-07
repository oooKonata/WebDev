<template>
  <div class="parent">
    <div class="title">父组件</div>
    <div>银子：{{ money }}万</div>
    <div>车子：1辆{{ car.brand }}，价值{{ car.price }}万</div>
    <Child />
  </div>
</template>

<script setup lang="ts" name="Parent">
  import Child from './Child.vue'
  import { ref, reactive, provide } from 'vue'
  /* 
    父组件通过provide提供数据给子组件，子组件通过inject注入（接收）父组件通过provide提供的数据
  */
  let money = ref(100)
  let car = reactive({
    brand: '奔驰',
    price: 100,
  })
  function updateMoney(value: number) {
    money.value -= value
  }

  // 向后代提供数据
  provide('moneyContext', { money, updateMoney })
  provide('car', car)
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
