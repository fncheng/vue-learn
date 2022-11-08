<template>
  <div class="list-item">list-item</div>
</template>

<script>
export default {
  name: 'ListItem',
  // inject:['getMsg'],
  inject: {
    getMsg: 'getMsg'
  },
  created() {
    console.log(this.getMsg)
    this.getMsg()
  }
}
</script>

<style></style>
