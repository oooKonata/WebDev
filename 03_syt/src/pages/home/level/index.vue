<template>
  <div class="level">
    <h1>医院</h1>
    <div class="content">
      <div class="left">等级:</div>
      <ul class="city">
        <li class="active">全部</li>
        <li>等级1</li>
        <li>等级2</li>
        <li>等级3</li>
        <li>等级4</li>
        <li>等级5</li>
        <li>等级6</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
  .level {
    color: #999;
    h1 {
      font-weight: 900;
      margin: 10px 0;
    }
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
        li {
          margin-right: 10px;
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
