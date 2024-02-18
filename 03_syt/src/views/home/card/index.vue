<template>
  <el-card class="box-card" shadow="hover">
    <div class="content">
      <div class="left">
        <div class="hospital_name">大标题</div>
        <div class="tip">
          <div class="level">
            <thumbs-up theme="outline" size="14" fill="#999" :strokeWidth="4" />
            <span>等级1</span>
          </div>
          <div class="time">
            <alarm-clock theme="outline" size="14" fill="#999" />
            <span>2024.01.01</span>
          </div>
        </div>
      </div>
      <div class="right">
        <img :src="url" alt="医院图片" />
      </div>
    </div>
  </el-card>
</template>

<script setup lang="ts">
  import { ThumbsUp, AlarmClock } from '@icon-park/vue-next'
  defineProps(['url'])
</script>

<style scoped lang="scss">
  .content {
    display: flex;
    justify-content: space-between;

    .left {
      .tip {
        display: flex;
        justify-content: space-between;
        margin-top: 16px;
        font-size: 14 px;
        color: #999;

        .level {
          margin-right: 32px;
          display: flex;
          align-items: center;
          /* 
            引入的iconpark svg图标编译后会套一层span标签，svg在span里不是居中对齐的，
            svg也是图片，受vertical-align（基线）影响，
            直接将span转变成弹性容器，大小由内容撑开，
            就不会出现span内部默认间距影响svg位置而无法居中对齐的问题
          */
          span:first-child {
            display: flex;
          }
          span:last-child {
            padding-left: 4px;
          }
        }
        .time {
          display: flex;
          align-items: center;
          span:first-child {
            display: flex;
          }
          span:last-child {
            padding-left: 4px;
          }
        }
      }
    }

    .right {
      img {
        width: 48px;
        height: 48px;
        border-radius: 24px;
      }
    }
  }
</style>
