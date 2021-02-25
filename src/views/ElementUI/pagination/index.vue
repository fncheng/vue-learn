<template>
  <div id="pagination">
    <span class="demonstration">调整每页显示条数</span>
    <el-pagination
      ref="pagination1"
      @size-change="handleSizeChange"
      @current-change="currentPageChange"
      layout="sizes, prev, pager, next, total"
      :current-page="currentPage"
      :total="100"
      :page-sizes="[10, 20, 30]"
      :page-size="10"
    >
    </el-pagination>
    <el-pagination
      @current-change="currentPageChange"
      layout="prev, pager, next, total"
      :total="50"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 3
    }
  },
  methods: {
    currentPageChange() {
      // this.currentPage = currentPage
      console.log('current page has changed')
    },
    handleSizeChange() {
      console.log('page size has changed')
    }
  }
}
</script>

<style></style>
