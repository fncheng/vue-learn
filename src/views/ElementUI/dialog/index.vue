<template>
  <div class="dialog">
    <!-- dialog 是相对于body居中的 -->
    <el-button type="text" @click="dialogVisible = true">
      点击打开 Dialog
    </el-button>

    <el-dialog
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false
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
  }
}
</script>

<style lang="scss" scoped>
.dialog {
  width: 400px;
  height: 100%;
}
</style>
