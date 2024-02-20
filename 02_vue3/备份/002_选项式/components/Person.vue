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
    data() {
      return {
        name: 'zhangsan',
        age: 18,
        tel: 18700008888,
      }
    },
    methods: {
      changeName() {
        this.name += '~'
      },
      changeAge() {
        this.age += 1
      },
      showTel() {
        alert(this.tel)
      },
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
