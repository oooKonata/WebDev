<template>
  <div class="tip">
    <!-- 常见科室 -->
    <div class="department">
      <div class="header">
        <div class="left">
          <hospital theme="outline" size="16" fill="#999" :strokeWidth="4" />
          <span>常见科室</span>
        </div>
        <div class="right">
          <span>全部</span>
          <right theme="outline" size="16" fill="#999" />
        </div>
      </div>
      <div class="content">
        <ul>
          <li>神经内科</li>
          <li>消化内科</li>
          <li>呼吸内科</li>
          <li>内科</li>
          <li>神经外科</li>
          <li>妇科</li>
          <li>产科</li>
          <li>儿科</li>
        </ul>
      </div>
    </div>
    <!-- 平台公共 -->
    <div class="notice">
      <div class="header">
        <div class="left">
          <hospital theme="outline" size="16" fill="#999" :strokeWidth="4" />
          <span>平台公告</span>
        </div>
        <div class="right">
          <span>全部</span>
          <right theme="outline" size="16" fill="#999" />
        </div>
      </div>
      <div class="content">
        <ul>
          <li>关于延长北京大学国际医院放假的通知</li>
          <li>北京中医药大学东方医院部分科室医生门诊</li>
          <li>武警总医院号源暂停更新通知</li>
        </ul>
      </div>
    </div>
    <!-- 停诊公告 -->
    <div class="notice">
      <div class="header">
        <div class="left">
          <hospital theme="outline" size="16" fill="#999" :strokeWidth="4" />
          <span>停诊公告</span>
        </div>
        <div class="right">
          <span>全部</span>
          <right theme="outline" size="16" fill="#999" />
        </div>
      </div>
      <div class="content">
        <ul>
          <li>关于延长北京大学国际医院放假的通知</li>
          <li>北京中医药大学东方医院部分科室医生门诊</li>
          <li>武警总医院号源暂停更新通知</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { Hospital, Right } from '@icon-park/vue-next'
</script>

<style scoped lang="scss">
  .tip {
    font-size: 14px;
    color: #999;
    .department {
      .header {
        display: flex;
        justify-content: space-between;
        .left {
          display: flex;
          align-items: center;
          span:first-child {
            display: flex;
          }
          span:last-child {
            padding-left: 4px;
            font-size: 16px;
            font-weight: 900;
          }
        }
        .right {
          display: flex;
          align-items: center;
          span:last-child {
            display: flex;
          }
        }
      }
      .content {
        margin-top: 4px;
        ul {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          li {
            width: 40%;
            margin-top: 12px;
          }
        }
      }
    }
    .notice {
      margin-top: 20px;
      .header {
        display: flex;
        justify-content: space-between;
        .left {
          display: flex;
          align-items: center;
          span:last-child {
            padding-left: 4px;
            font-size: 16px;
            font-weight: 900;
          }
        }
        .right {
          display: flex;
          align-items: center;
          span:last-child {
            display: flex;
          }
        }
      }
      .content {
        ul {
          margin-top: 16px;
          li {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin-top: 12px;
          }
        }
      }
    }
  }
</style>
