<template>
  <div class="mixins">
    <span>{{ msg }}</span>
    <div>{{ age || '001' }}</div>
    <div>{{ name | strToUpperCase }}</div>
    <div>{{ sex || 'male' | strToUpperCase }}</div>
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
  name: 'mixins',
  data() {
    return {
      msg: 'mixin',
      name: 'zs',
      age: '',
      sex: ''
    }
  },
  filters: {
    strToUpperCase(str) {
      return str.toUpperCase()
    }
  }
}
</script>

<style></style>
