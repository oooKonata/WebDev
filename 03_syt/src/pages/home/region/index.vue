<template>
  <div class="region">
    <div class="content">
      <div class="left">地区:</div>
      <ul class="city">
        <li class="active">全部</li>
        <li>武汉市</li>
        <li>武汉市</li>
        <li>武汉市</li>
        <li>武汉市</li>
        <li>武汉市</li>
        <li>武汉市</li>
        <li>武汉市</li>
        <li>武汉市</li>
        <li>武汉市</li>
        <li>武汉市</li>
        <li>武汉市</li>
        <li>武汉市</li>
        <li>武汉市</li>
        <li>武汉市</li>
        <li>武汉市</li>
        <li>武汉市</li>
        <li>武汉市</li>
        <li>武汉市</li>
        <li>武汉市</li>
        <li>武汉市</li>
        <li>武汉市</li>
        <li>武汉市</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
  .region {
    margin-top: 10px;
    color: #999;
    .content {
      display: flex;
      margin-right: 10px;
      font-size: 14px;
      .left {
        margin-right: 10px;
        // 左侧标题不拉伸不压缩
        flex: 0 0 auto;
      }
      .city {
        display: flex;
        flex-wrap: wrap;
        li {
          margin-right: 10px;
          margin-bottom: 10px;
          // &表示嵌套的上一级
          &.active {
            color: #55a6fe;
          }
        }
        li:hover {
          color: #55a6fe;
          cursor: pointer;
        }
      }
    }
  }
</style>
