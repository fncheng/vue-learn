<template>
  <div class="tabs">
    <el-tabs v-model="activeName" @tab-click="handleClick" :closable="true">
      <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理" name="second" :closable="true"
        >配置管理</el-tab-pane
      >
      <el-tab-pane label="角色管理" name="third" :disabled="false"
        >角色管理</el-tab-pane
      >
      <el-tab-pane label="定时任务补偿" name="fourth" disabled
        >定时任务补偿</el-tab-pane
      >
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: 'first'
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab.name, event)
    }
  }
}
</script>

<style></style>
