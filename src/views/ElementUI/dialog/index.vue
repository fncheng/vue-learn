<template>
  <div class="dialog">
    <!-- dialog 是相对于body居中的 -->
    <el-button type="text" @click="dialogVisible = true">
      点击打开 Dialog
    </el-button>

    <el-dialog
      class="mydialog"
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
      :show-close="true"
    >
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          确 定
        </el-button>
      </span>
    </el-dialog>
    <div>{{ '0' | resultFormat }}</div>
  </div>
</template>

<script>
import test from './test'
export default {
  data() {
    return {
      dialogVisible: false
    }
  },
  filters: {
    resultFormat(val) {
      return test[val]
    }
  },
  methods: {
    handleClose() {
      this.$confirm('确认关闭？')
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  mounted() {
    console.log(test)
    console.log(test['0'])
  }
}
</script>

<style lang="scss" scoped>
.dialog {
  // width: 400px;
  // height: 100%;
}
</style>

<style lang="scss" scoped`>
.el-dialog__wrapper.mydialog ::v-deep .el-dialog {
  // left: 200px;
  border-radius: 500px;
}
</style>
