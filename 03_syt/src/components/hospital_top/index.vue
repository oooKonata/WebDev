<template>
  <div class="top">
    <div class="content">
      <div class="left">
        <img src="../../assets/images/Heng.jpeg" alt="logo" />
        <p>这里有一只修勾</p>
      </div>
      <div class="right">
        <p class="help">帮助中心</p>
        <p class="login">登录/注册</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
  .top {
    // 顶部栏固定在顶部，且层级很高
    position: fixed;
    z-index: 999;

    width: 100%;
    height: 64px;
    background: #fff;
    display: flex;
    justify-content: center;

    .content {
      width: 1200px;
      background-color: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .left {
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          height: 48px;
          margin-right: 10px;
          border-radius: 24px;
        }

        p {
          font-size: 20px;
          color: #55a6fe;
        }
      }

      .right {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        color: #666;

        .help {
          margin-right: 10px;
        }
      }
    }
  }
</style>
