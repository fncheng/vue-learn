<template>
  <!-- 
  data 对象数组，表格的数据来源
  stripe 条纹，控制表格斑马纹
  border 控制表格边框
  height 设置表格高度，固定表头
   -->
  <el-table
    :data="tableData"
    :stripe="false"
    :border="false"
    :row-class-name="tableRowClassName"
    height="200"
    style="width: 100%"
  >
    <el-table-column prop="date" label="日期" width="180"> </el-table-column>
    <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
    <el-table-column prop="address" label="地址"> </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
    }
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return 'warning-row'
      } else if (rowIndex === 3) {
        return 'success-row'
      }
      return ''
    }
  }
}
</script>

<style lang="scss" scoped>
.el-table ::v-deep.warning-row {
  background: oldlace;
}

.el-table ::v-deep.success-row {
  background: #f0f9eb;
}
</style>
