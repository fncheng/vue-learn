<template>
  <div class="element-ui">
    <template>
      <el-button type="text" @click="open">点击打开 Message Box</el-button>
    </template>
    <el-button type="text" @click="dialogVisible = true"
      >点击打开 Dialog</el-button
    >
    <!-- 
      handleClose 关闭前的回调
     -->
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :close-on-click-modal="true"
      :close-on-press-escape="false"
    >
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
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
    open() {
      this.$alert('', '标题名称', {
        confirmButtonText: '确定',
        center: true
      })
    }
    // handleClose(done) {
    //   this.$confirm('确认关闭？')
    //     .then(() => {
    //       done()
    //     })
    //     .catch(() => {})
    // }
  }
}
</script>

<style></style>
