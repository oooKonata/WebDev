<template>
  <div class="wrapper">
    <div class="header">
      <h3 class="title">组件通信</h3>
    </div>
    <div class="nav-wrapper">
      <!-- router-link导航 -->
      <!-- <router-link to="/props">1.props</router-link>
      <router-link to="/event">2.自定义事件</router-link>
      <router-link to="/mitt">3.mitt</router-link>
      <router-link to="/model">4.v-model</router-link>
      <router-link to="/attrs">5.$attrs</router-link>
      <router-link to="/ref-parent">6.$refs与$parent</router-link>
      <router-link to="/provide-inject">7.provide与inject</router-link>
      <router-link to="/pinia">8.pinia</router-link>
      <router-link to="/slot">9.slot</router-link> -->

      <!-- 编程式导航 -->
      <!-- <div
        class="nav"
        :class="{ selected: selectIndex === 1 }"
        @click="toProps(1)"
      >
        1.props
      </div>
      <div
        class="nav"
        :class="{ selected: selectIndex === 2 }"
        @click="toEvent(2)"
      >
        2.自定义事件
      </div>
      <div
        class="nav"
        :class="{ selected: selectIndex === 3 }"
        @click="toMitt(3)"
      >
        3.mitt
      </div>
      <div
        class="nav"
        :class="{ selected: selectIndex === 4 }"
        @click="toVmodel(4)"
      >
        4.v-model
      </div>
      <div
        class="nav"
        :class="{ selected: selectIndex === 5 }"
        @click="toAttrs(5)"
      >
        5.$attrs
      </div>
      <div
        class="nav"
        :class="{ selected: selectIndex === 6 }"
        @click="toRefPerent(6)"
      >
        6.$refs与$parent
      </div>
      <div
        class="nav"
        :class="{ selected: selectIndex === 7 }"
        @click="toProvideInject(7)"
      >
        7.provide与inject
      </div>
      <div
        class="nav"
        :class="{ selected: selectIndex === 8 }"
        @click="toPinia(8)"
      >
        8.pinia
      </div>
      <div
        class="nav"
        :class="{ selected: selectIndex === 9 }"
        @click="toSlot(9)"
      >
        9.slot
      </div> -->

      <!-- 代码优化 -->
      <div
        class="nav"
        :class="{ selected: selectIndex === index }"
        v-for="(item, index) in navArr"
        :key="index"
        @click="selectedIndex(index)"
      >
        {{ item }}
      </div>
    </div>
    <div class="router-view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts" name="App">
  import { ref, onMounted, reactive } from 'vue'
  import { useRouter } from 'vue-router'
  // 选中状态
  const selectIndex = ref(0)
  // 导航内容数组
  const navArr = reactive([
    '1.props',
    '2.自定义事件',
    '3.mitt',
    '4.v-model',
    '5.$attrs',
    '6.$refs与$parent',
    '7.provide与inject',
    '8.pinia',
    '9.slot',
  ])
  // 路由导航数组
  const routeArr = reactive([
    '/props',
    '/event',
    '/mitt',
    '/model',
    '/attrs',
    '/ref-parent',
    '/provide-inject',
    '/pinia',
    '/slot',
  ])
  // 获取路由器
  const router = useRouter()
  /* 
    思路：每个子项设置索引，选中某项时，:class="{ selected: selectIndex === index }"等价于给div添加了一个 class='selected'
  */
  function selectedIndex(index: number) {
    selectIndex.value = index
    // 对应的索引对应相应的路由导航
    router.push(routeArr[index])
  }
  // 路由导航
  /* // 默认展示第1个路由
  onMounted(() => {
    toProps(selectIndex.value)
  })
  function toProps(index: number) {
    selectIndex.value = index
    router.push('/props')
  }
  function toEvent(index: number) {
    selectIndex.value = index
    router.push('/event')
  }
  function toMitt(index: number) {
    selectIndex.value = index
    router.push('/mitt')
  }
  function toVmodel(index: number) {
    selectIndex.value = index
    router.push('/model')
  }
  function toAttrs(index: number) {
    selectIndex.value = index
    router.push('/attrs')
  }
  function toRefPerent(index: number) {
    selectIndex.value = index
    router.push('/ref-parent')
  }
  function toProvideInject(index: number) {
    selectIndex.value = index
    router.push('/provide-inject')
  }
  function toPinia(index: number) {
    selectIndex.value = index
    router.push('/pinia')
  }
  function toSlot(index: number) {
    selectIndex.value = index
    router.push('/slot')
  } */
</script>

<style scoped la="scss">
  .wrapper {
    .nav-wrapper {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      .nav {
        color: #333;
        background-color: #f5f5f5;
        border-radius: 8px;
        padding: 12px;
        margin: 0 12px 12px 0;
        display: flex;
        align-items: center;
      }
      .selected {
        color: #fff;
        background-color: #393e46;
      }
    }
  }
</style>
