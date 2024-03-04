<template>
  <div class="Perant">
    <h3>父组件</h3>
    <Child1 />
    <Child2 />
  </div>
</template>

<script setup lang="ts" name="Perant">
  import Child1 from './Child1.vue'
  import Child2 from './Child2.vue'
</script>

<style scoped>
  .Perant {
    background-color: rgb(165, 164, 164);
    padding: 20px;
    border-radius: 10px;
  }
  .Perant button {
    margin-left: 5px;
  }
</style>
