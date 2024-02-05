<template>
  <el-card class="box-card" shadow="hover">
    <div class="content">
      <div class="left">
        <div class="hospital_name">大标题</div>
        <div class="tip">
          <div class="level">等级1</div>
          <div class="time">2024.01.01</div>
        </div>
      </div>
      <div class="right">
        <img src="../../../assets/images/Heng.jpeg" alt="医院图片" />
      </div>
    </div>
  </el-card>
</template>

<script setup lang="ts"></script>

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
          margin-right: 32px;
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
