<template>
  <div class="pagination">
    <el-pagination
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      :page-sizes="[8, 12, 16, 20]"
      layout="total, sizes, prev, pager, next, jumper"
      :background="true"
      :total="32"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  // 当前分页
  const currentPage = ref(1)
  // 总分页数
  const pageSize = ref(8)
</script>

<style scoped lang="scss">
  .pagination {
    margin: 20px 0;
  }
</style>
