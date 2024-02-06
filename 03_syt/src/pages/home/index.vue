<template>
  <div>
    <!-- 首页轮播 -->
    <Carousel />
    <!-- 首页搜索 -->
    <Search />
    <!-- 底部导航 -->
    <el-row :gutter="20">
      <el-col :span="20">
        <!-- 筛选：医院等级 -->
        <Level />
        <!-- 筛选：医院地区 -->
        <Region />
        <!-- 医院展示（卡片） -->
        <div class="hospital">
          <Card
            v-for="item in pageSize"
            :key="item"
            :url="catUrlArr[item - 1]"
          />
          <!-- 分页器 -->
          <el-pagination
            v-model:current-page="currentPage"
            v-model:page-size="pageSize"
            :page-sizes="[2, 4, 6, 8]"
            layout="total, sizes, prev, pager, next, jumper"
            :background="true"
            :total="10"
            @current-change="currentChange"
            @size-change="sizeChange"
          />
        </div>
      </el-col>
      <el-col :span="4">222</el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
  // 首页轮播
  import Carousel from './carousel/index.vue'
  // 首页搜索
  import Search from './search/index.vue'
  // 医院等级
  import Level from './level/index.vue'
  // 医院地区
  import Region from './region/index.vue'
  // 医院展示（卡片）
  import Card from './card/index.vue'

  import { ref, onMounted } from 'vue'
  // 引入api reqCat
  import { reqCat } from '@/api/home'
  // 当前分页
  const currentPage = ref(1)
  // 总分页数
  const pageSize = ref(2)
  // 猫咪图片url数组
  let catUrlArr: any = ref([])
  // 组件挂在后发起请求
  onMounted(() => {
    // 获取图片url数组
    getCatUrl()
  })
  const currentChange = () => {
    getCatUrl()
  }
  const sizeChange = () => {
    getCatUrl()
  }
  // 获取图片url数组
  const getCatUrl = async () => {
    let result: any = await reqCat()
    if (result.status == 200) {
      for (let index = 0; index < result.data.length; index++) {
        catUrlArr.value.push(result.data[index].url)
      }
      console.log(catUrlArr.value)
    }
  }
</script>

<style scoped lang="scss">
  .hospital {
    margin-top: 10px;
    margin-bottom: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
</style>
