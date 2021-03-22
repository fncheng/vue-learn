<template>
  <header>
    <ul>
      <li v-for="(item, index) in list.slice(1)" :key="index">
        <router-link :to="item" class="item">
          {{ item | navFormat }}
        </router-link>
        |
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  data() {
    return {
      list: []
    }
  },
  created() {
    this.$router.options.routes.forEach((v) => {
      this.list.push(v.path)
    })
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
ul {
  display: flex;
  justify-content: center;
}
.item {
  margin-left: 5px;
}
body {
  height: 100%;
}
header {
  margin-top: 20px;
  margin-bottom: 40px;
}
</style>
