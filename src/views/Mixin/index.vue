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
  },
  async created() {
    await setTimeout(() => {
      console.log(1)
    }, 5000)
  },
  async mounted() {
    console.log(2)
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
