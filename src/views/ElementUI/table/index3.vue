<template>
  <div class="main">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column fixed prop="date" label="日期" width="150">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120"> </el-table-column>
      <el-table-column prop="province" label="省份" width="120">
      </el-table-column>
      <el-table-column prop="city" label="市区" width="120"> </el-table-column>
      <el-table-column prop="address" label="地址" width="600">
      </el-table-column>
      <el-table-column prop="zip" label="邮编" width="120"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button
            @click="handleClick(scope.$index, scope.row)"
            type="text"
            size="small"
          >
            查看
          </el-button>
          <el-button type="text" size="small" @click="dialogVisible = true">
            编辑
          </el-button>
          <!-- 嵌套的dialog必须指定append-to-body为true -->
          <el-dialog
            title="收货地址"
            :visible.sync="dialogVisible"
            :append-to-body="true"
          >
            <el-form :model="scope.row">
              <el-form-item label="活动名称" :label-width="formLabelWidth">
                <el-input
                  v-model="scope.row.name"
                  @input="handleInput(scope.$index, scope.row)"
                  autocomplete="off"
                ></el-input>
              </el-form-item>
              <el-form-item label="活动区域" :label-width="formLabelWidth">
                <el-select v-model="scope.city" placeholder="请选择活动区域">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogVisible = false">
                确 定
              </el-button>
            </div>
          </el-dialog>
        </template>
      </el-table-column>
    </el-table>
    <el-button type="text" @click="dialogVisible = true">
      点击打开 Dialog
    </el-button>
  </div>
</template>

<script>
export default {
  name: 'Table3',
  methods: {
    handleClick(index, row) {
      console.log(index, row)
    },
    handleInput(index, row) {
      console.log(index, row)
    }
  },

  data() {
    return {
      dialogVisible: false,
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1519 弄',
          zip: 200333
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333
        }
      ],
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px'
    }
  }
}
</script>

<style></style>
