<template>
  <div class="grand-child">
    <div class="title">孙组件</div>
    <div>银子：{{ money }}万</div>
    <div>车子：1辆{{ car.brand }}，价值{{ car.price }}万</div>
    <button @click="updateMoney(6)">花爷爷的钱</button>
  </div>
</template>

<script setup lang="ts" name="GrandChild">
  import { inject } from 'vue'

  let { money, updateMoney } = inject('moneyContext', {
    money: 1,
    updateMoney: (param: number) => {},
  })
  let car = inject('car', { brand: '未知', price: 0 })
</script>

<style scoped lang="scss">
  .grand-child {
    .title {
      font-size: 20px;
      font-weight: 900;
      margin-bottom: 16px;
    }
    margin-top: 20px;
    background-color: #eee;
    border: 1px solid #ccc;
    padding: 20px;
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
