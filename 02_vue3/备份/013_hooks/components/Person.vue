<template>
  <div class="person">
    <h2>当前求和为：{{ sum }}，放大10倍后：{{ bigSum }}</h2>
    <button @click="add">点我sum+1</button>
    <hr />
    <img v-for="(dog, index) in dogList" :src="dog" :key="index" />
    <br />
    <button @click="getDog">再来一只小狗</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  import useSum from '@/hooks/useSum'
  import useDog from '@/hooks/useDog'
  // 解构
  const { sum, add, bigSum } = useSum()
  const { dogList, getDog } = useDog()
</script>

<style scoped scss>
  .person {
    background-color: cyan;
    border-radius: 10px;
    padding: 20px;
    button {
      margin: 0 5px;
    }
    img {
      height: 100px;
      margin-right: 10px;
    }
  }
</style>
