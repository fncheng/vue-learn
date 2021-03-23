<template>
  <div class="layout">
    <el-row>
      <el-col :span="20" class="grid-content bg-purple"></el-col>
    </el-row>
    <!-- 
      gutter 间距 单位px
     -->
    <el-row :gutter="20">
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6" :offset="12">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {}
</script>

<style>
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.bg-purple {
  background: #d3dce6;
}
</style>
