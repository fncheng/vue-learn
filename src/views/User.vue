<template>
  <div class="uesr">
    <ul>
      <li>{{ myname }}</li>
      <li>{{ price }}</li>
      <li>{{ info }}</li>
    </ul>
    用户名:
    <span>{{ username }}</span>
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
  name: "user",
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
    }
  },
  methods: {
    increment(e) {
      this.$store.commit("increment", e.target.value)
      console.log(e)
    },
    incrementAsync(e) {
      this.$store.dispatch("incrementAsync", e.target.value)
    }
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
