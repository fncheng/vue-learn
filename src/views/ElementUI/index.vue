<template>
  <div class="element-ui">
    <template>
      <el-button type="text" @click="open">点击打开 Message Box</el-button>
    </template>
  </div>
</template>

<script>
export default {
  methods: {
    open() {
      this.$alert('', '标题名称', {
        confirmButtonText: '确定',
        center: true
      })
    }
  }
}
</script>

<style></style>
