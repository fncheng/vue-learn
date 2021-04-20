<template>
  <div>
    <div class="top">
      <el-popover
        placement="right"
        title="筛选要展示的列表"
        width="200"
        trigger="click"
      >
        <el-button slot="reference">筛选列表</el-button>
        <el-checkbox-group v-model="checkedTableColumns">
          <el-checkbox
            v-for="item in tableColumns"
            :key="item.prop"
            :label="item.prop"
            >{{ item.label }}</el-checkbox
          >
        </el-checkbox-group>
      </el-popover>
    </div>
    <div class="container">
      <el-table :data="tableData" border>
        <template v-for="item in tableColumns">
          <el-table-column
            v-if="item.show"
            :key="item.prop"
            :prop="item.prop"
            :label="item.label"
          ></el-table-column>
        </template>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'table2',
  data() {
    return {
      tableData: [
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }
      ],
      tableColumns: [
        { prop: 'date', label: '日期', show: true },
        { prop: 'name', label: '姓名', show: true },
        { prop: 'address', label: '地址', show: false }
      ]
    }
  },
  computed: {
    tableColumnShow() {
      return this.tableColumns.filter((item) => item.show)
    },
    checkedTableColumns: {
      get() {
        return this.tableColumnShow.map((item) => item.prop)
      },
      set(value) {
        this.tableColumns.forEach((item) => {
          // if checked
          if (value.includes(item.prop)) {
            item.show = true
          } else {
            item.show = false
          }
        })
      }
    }
  }
}
</script>

<style></style>
