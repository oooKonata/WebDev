<template>
  <div class="person">
    <h2>人</h2>
    <Dog :dogs="dogs" />
  </div>
</template>

<script setup lang="ts">
  import Dog from './Dog.vue'
  import type { Dogs } from '@/types'
  import { reactive } from 'vue'
  let dogs = reactive<Dogs>([
    { id: 'qwer11', name: 'dog1', age: 1 },
    { id: 'qwer12', name: 'dog2', age: 2 },
    { id: 'qwer13', name: 'dog3', age: 3 },
  ])
</script>

<style scoped lang="scss">
  .person {
    background-color: cyan;
    width: 100%;
    padding: 10px;
    border-radius: 8px;
  }
</style>
