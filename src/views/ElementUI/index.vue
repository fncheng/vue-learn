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
    <ul class="list">
      <!-- 内联样式 -->
      <!-- <li
        class="item"
        :style="{
          'background-image':
            'url(' + require('../../assets/images/01.jpeg') + ')'
        }"
      > -->
      <!-- es2015 -->
      <li
        class="item"
        :style="{
          'background-image': `url(${require('../../assets/images/01.jpeg')})`
        }"
      >
        <span>100</span><img src="" alt="" />
      </li>
      <li class="item"><span>100</span><img src="" alt="" /></li>
      <li class="item"><span>100</span><img src="" alt="" /></li>
      <li class="item"><span>100</span><img src="" alt="" /></li>
      <li class="item"><span>100</span><img src="" alt="" /></li>
    </ul>
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

<style lang="scss" scoped>
.list {
  width: 200px;
  height: 600px;
  margin: 0 auto;
  background-color: #ccc;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .item {
    width: 100%;
    height: 100px;
    background-color: gold;
    // background-image: url('~@/assets/images/01.jpeg');
  }
}
</style>
