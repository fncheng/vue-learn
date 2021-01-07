<template>
  <div class="component-a">
    <span>msg: {{ myMsg }}</span>
  </div>
</template>

<script>
export default {
  name: 'component-a',
  // props: ["my-msg"],
  props: {
    myMsg: String
  },
  created() {
    console.log('子组件--------------------------------------')
  }
}
</script>

<style></style>
