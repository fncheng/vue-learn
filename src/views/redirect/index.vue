<template>
  <div class="redirect">Redirect</div>
</template>

<script>
export default {
  // created() {
  //   const { params, query } = this.$route
  //   const { path } = params
  //   this.$router.replace({ path: '/' + path, query })
  // },
  beforeCreate() {
    console.log('this.$route', this.$route)
    const { query } = this.$route
    const path = query.path
    // console.log('path:', path, this.$route)
    // 跳转至path页面
    this.$router.replace({ path: path })
  },
  mounted() {},
  render: function(h) {
    return h() // avoid warning message
  }
}
</script>

<style></style>
