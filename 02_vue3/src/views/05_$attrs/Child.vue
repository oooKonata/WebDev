<template>
  <div class="child">
    <div class="title">子组件</div>
    <div>a：{{ $attrs.a }}</div>
    <div>c：{{ c }}</div>
  </div>
  <div class="child">
    <div class="title">子组件</div>
    <div>a：{{ $attrs.a }}</div>
    <div>c：{{ c }}</div>
    <!-- 显式绑定 $attrs -->
    <GrandChild v-bind="$attrs" />
  </div>
</template>

<script setup lang="ts" name="Child">
  import GrandChild from './GrandChild.vue'
  defineProps(['c'])
</script>

<style scoped>
  .child {
    .title {
      font-size: 20px;
      font-weight: 900;
      margin-bottom: 16px;
    }
    margin-top: 20px;
    background-color: #ddd;
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 10px;
  }
</style>
