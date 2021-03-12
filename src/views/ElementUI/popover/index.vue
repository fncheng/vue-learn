<template>
  <div class="popover">
    <el-popover placement="top" width="160" v-model="visible" :disabled="false">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false
    }
  }
}
</script>

<style></style>
