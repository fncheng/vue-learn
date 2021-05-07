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
  data() {
    return {
      msg: 'mixin'
    }
  },
  created() {
    console.log('mixin created')
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
      msg: 'component',
      name: 'zs',
      age: '',
      sex: ''
    }
  },
  filters: {
    strToUpperCase(str) {
      return str.toUpperCase()
    }
  },
  async created() {
    console.log('组件 created')
    await setTimeout(() => {}, 5000)
  },
  async mounted() {
    console.log('组件 mounted')
    console.log('销毁', this.$router)
  },
  // async mounted() {
  //   let res = await this.getNumber()
  //   console.log('async mounted:', res)
  // },
  // mounted() {
  //   let res = this.getNumber1()
  //   console.log('mounted:', res)
  // },

  methods: {
    getNumber() {
      return setTimeout(() => {
        console.log('123')
        return '123'
      }, 6000)
    },
    getNumber1() {
      return 123
    }
  }
}
</script>

<style></style>
