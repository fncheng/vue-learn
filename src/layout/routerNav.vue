<template>
  <div class="sidebar">
    <el-menu :default-active="activeIndex" mode="vertical">
      <el-menu-item
        v-for="(item, index) in sidebars"
        :index="String(index)"
        :key="index"
      >
        <router-link :to="item">
          {{ item | navFormat }}
        </router-link>
      </el-menu-item>
      <el-menu-item index="100">处理中心</el-menu-item>
      <el-submenu index="200">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1',
      list: []
    }
  },
  computed: {
    sidebars() {
      return this.$router.options.routes
        .filter((item) => item.path !== '/')
        .map((item) => item.path)
    }
  },
  filters: {
    navFormat(str) {
      let newStr = str.slice(1)
      let res = newStr.replace(/\w/, (match) => {
        return match.toUpperCase()
      })
      return res
    }
  },
  methods: {}
}
</script>

<style scoped>
.sidebar {
  width: 160px;
}
</style>
