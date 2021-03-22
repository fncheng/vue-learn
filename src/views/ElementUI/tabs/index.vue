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
    <div>{{ dataName }}</div>
    <div>
      <div v-for="item in list" :key="item">{{ item }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: 'first',
      dataName: 'this is data name',
      list: [1, 2, 3, 4, 5]
    }
  },
  computed: {
    // dataName() {
    //   return this.activeName
    // }
  },
  watch: {
    dataName() {
      if (this.dataName == '1') {
        console.log('dataName has changed')
      }
      console.log('val has changed')
      // return this.activeName
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
