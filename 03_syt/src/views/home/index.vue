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
            v-for="item in pageNum"
            :key="item"
            :url="pageUrlArr[item - 1]"
          />
        </div>
        <div class="pagination">
          <!-- 分页器 -->
          <el-pagination
            v-model:current-page="currentPage"
            v-model:page-size="pageSize"
            :page-sizes="[2, 4, 6, 8]"
            layout="total, sizes, prev, pager, next, jumper"
            :background="true"
            :total="total"
            @current-change="currentChange"
            @size-change="sizeChange"
          />
        </div>
      </el-col>
      <el-col :span="4">
        <Tip />
      </el-col>
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
  // 右侧组件
  import Tip from './tip/index.vue'

  import { ref, onMounted } from 'vue'
  // 引入api reqCat
  import { reqCat } from '@/api/home'
  // 引入usePagination hook
  import usePagination from '@/hooks/usePagination'

  // 当前页数
  let currentPage = ref(1)
  // 每页显示的条目数
  let pageSize = ref(4)
  // 每页实际条目数
  let pageNum = ref(2)
  // 接口返回的全部图片url数组
  let catUrlArr: any = ref([])
  let total = ref(0)
  // 每页图片url数组
  let pageUrlArr: any = ref([])

  // let totalNum: any = ref()
  // 组件挂在后发起请求
  onMounted(async () => {
    // 获取图片url数组
    await getCatUrl()
    // 获取总条目数
    total.value = catUrlArr.value.length
    currentChange()
  })

  // 分页号改变时执行
  const currentChange = () => {
    // 使用封装的分页hook
    // 解构赋值重命名
    const { pageNum: a, pageUrlArr: b } = usePagination(
      currentPage.value,
      pageSize.value,
      total.value,
      catUrlArr.value
    )
    pageNum.value = a
    pageUrlArr.value = b

    /* console.log('current-page', currentPage.value, pageSize.value)
    let orderNum: number = currentPage.value * pageSize.value
    console.log('order', orderNum)
    // 分页起始位数，考虑到有从0开始的情况，用末尾减去pageSize
    let orderStart: number = orderNum - pageSize.value
    let orderEnd: number
    // 分页结束位数，考虑到最后一页条目数小于pageSize
    if (orderNum < total.value) {
      // 非最后一页时，结束为止等与起始位置 + pageSize
      orderEnd = orderStart + pageSize.value
    } else {
      // 最后一页，结束位置是总数
      orderEnd = total.value
    }
    pageNum.value = orderEnd - orderStart
    console.log(orderStart, orderEnd, pageNum.value)
    // 浅拷贝，取出url数组中指定的片段
    pageUrlArr.value = catUrlArr.value.slice(orderStart, orderEnd) */
  }

  // 分页条目数改变时执行
  const sizeChange = () => {
    const pagination = usePagination(
      currentPage.value,
      pageSize.value,
      total.value,
      catUrlArr.value
    )
    pageNum.value = pagination.pageNum
    pageUrlArr.value = pagination.pageUrlArr
  }
  // 获取图片url数组
  const getCatUrl = async () => {
    let result: any = await reqCat()
    // 接收接口返回对象的临时数组
    let catUrlArr_tem = []
    if (result.status == 200) {
      for (let index = 0; index < result.data.length; index++) {
        catUrlArr_tem.push(result.data[index].url)
      }
    }
    // 临时数组给响应式url数组
    catUrlArr.value = catUrlArr_tem
  }
</script>

<style scoped lang="scss">
  .hospital {
    margin-top: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
  .pagination {
    margin: 20px 0;
  }
</style>
