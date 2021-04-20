<template>
  <div class="popover">
    <br />
    <br />
    <br />
    <el-popover
      trigger="click"
      placement="right"
      :offset="0"
      width="160"
      v-model="visible"
      :disabled="false"
    >
      <p>这是一段内容这是一段内容确定删除吗？</p>
      <div style="text-align: right; margin: 0">
        <el-button size="mini" type="text" @click="visible = false"
          >取消</el-button
        >
        <el-button type="primary" size="mini" @click="visible = false"
          >确定</el-button
        >
      </div>
      <el-button slot="reference" :disabled="false">删除</el-button>
      <!-- <template slot="reference">
        <el-button>删除</el-button>
      </template> -->
    </el-popover>
    <br />
    <br />
    <br />
    <br />
    <el-table
      :data="tableData"
      :stripe="false"
      :border="false"
      height="600"
      style="width: 100%"
    >
      <el-table-column prop="date" label="日期" width="180">
        <template v-slot="scope">
          <el-popover
            placement="top-start"
            title="标题"
            width="200"
            trigger="click"
          >
            <p>{{ scope.row }}</p>
            <el-button slot="reference">点击激活</el-button>
          </el-popover>
        </template>
        <!-- <template slot-scope="scope">
          <el-popover
            placement="right"
            width="160"
            :disabled="false"
          >
            <p>这是弹出框内容</p>
            {{ scope.name }}
            <el-button slot="reference" :disabled="false">删除</el-button>
          </el-popover>
        </template> -->
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180">
        <el-button>Button</el-button>
      </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
      <el-table-column prop="obj" label="作用域插槽">
        <!-- 
        element-ui table-column scoped slot
        自定义列的内容，参数为 { row, column, $index }
        https://element.eleme.cn/#/zh-CN/component/table#table-column-scoped-slot
       -->
        <template v-slot="slotProps">
          <div>
            {{ slotProps.row.name }}
            <!-- slotProps.row 即obj这一项内容 -->
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      visible2: false,
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          obj: {
            name: 'zs',
            age: 14
          }
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          obj: {
            name: 'zs',
            age: 14
          }
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          obj: {
            name: 'zs',
            age: 14
          }
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          obj: {
            name: 'zs',
            age: 14
          }
        }
      ]
    }
  }
}
</script>

<style></style>
