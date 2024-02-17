<template>
  <el-card class="box-card" shadow="hover">
    <div class="content">
      <div class="left">
        <div class="hospital_name">大标题</div>
        <div class="tip">
          <div class="level">
            <div class="icon-thumbs-up">
              <thumbs-up
                theme="outline"
                size="15"
                fill="#999"
                :strokeWidth="4"
              />
            </div>
            <span>等级1</span>
          </div>
          <div class="time">
            <div class="icon-alarm-clock">
              <alarm-clock theme="outline" size="14" fill="#999" />
            </div>
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
        font-size: 13px;
        color: #999;

        .level {
          .icon-thumbs-up {
            width: 16px;
            height: 16px;
            margin-right: 4px;
          }
          margin-right: 32px;
          display: flex;
          align-items: center;
        }
        .time {
          .icon-alarm-clock {
            width: 16px;
            height: 16px;
            margin-right: 4px;
          }
          display: flex;
          align-items: center;
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
