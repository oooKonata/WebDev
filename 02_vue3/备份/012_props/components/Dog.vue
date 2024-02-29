<template>
  <div class="dog">
    <h3>狗</h3>
    <ul>
      <!-- 
        <li v-for="dog in props.dogs" :key="props.dogs.id">
        {{ dog.id }} - {{ dog.name }} - {{ dog.age }}
        </li>
       -->
      <!-- 模版中的props可以省略 -->
      <li v-for="dog in dogs" :key="dogs.id">
        {{ dog.id }} - {{ dog.name }} - {{ dog.age }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  import type { Dogs } from '@/types'
  const props = defineProps(['dogs'])
</script>

<style scoped lang="scss">
  .dog {
    background-color: yellow;
    padding: 10px;
    border-radius: 8px;
    ul {
      padding: 0;
      li {
        list-style-type: none;
      }
    }
  }
</style>
