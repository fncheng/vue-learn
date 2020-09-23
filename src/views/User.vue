<template>
  <div class="uesr">
    <ul>
      <li>{{ myname }}</li>
      <li>{{ price }}</li>
      <li>{{ info }}</li>
    </ul>
    用户名:
    <span>{{ username }}</span>
    computed和localStorage:
    <span>{{ localComputed }}</span>
    <br />
    输入值:<input @input="increment" type="text" /> 输入值:<input
      @input="incrementAsync"
      type="text"
    />
    数字:
    <span>{{ $store.state.msg }}</span>
    count:<span>{{ $store.state.count }}</span>
    <!-- 路由出口 -->
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
export default {
  name: 'user',
  data() {
    return {
      localCom: localStorage.getItem('com')
    }
  },
  props: {
    myname: String,
    price: Number,
    info: String
  },
  computed: {
    username() {
      return this.$store.state.name
    },
    count() {
      return this.$store.state.count
    },
    // 计算属性只更改一次,获取不到localStorage中的变化
    localComputed() {
      return this.localCom
    }
  },
  methods: {
    increment(e) {
      this.$store.commit('increment', e.target.value)
      console.log(e)
    },
    incrementAsync(e) {
      this.$store.dispatch('incrementAsync', e.target.value)
    }
  },
  created() {
    localStorage.setItem('com', 'jisuanshuxing')
  },
  beforeRouteEnter(to, from, next) {
    console.log('com: ', localStorage.getItem('com'))
    next()
  }
}
</script>

<style lang="scss" scoped>
div.uesr {
  border: 2px solid #ccc;
  ul {
    background-color: red;
  }
}
</style>
