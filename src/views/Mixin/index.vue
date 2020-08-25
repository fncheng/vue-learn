<template>
  <div class="mixins">
    <span>{{ msg }}</span>
  </div>
</template>

<script>
// 组件mixin
const myMixin = {
  created() {
    this.hello()
  },
  methods: {
    hello() {
      console.log(this.msg)
    }
  }
}
export default {
  mixins: [myMixin],
  name: "mixins",
  data() {
    return {
      msg: "mixin"
    }
  }
}
</script>

<style></style>
