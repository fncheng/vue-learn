<template>
  <div class="uesr">
    <ul>
      <li>{{ myname }}</li>
      <li>{{ price }}</li>
      <li>{{ info }}</li>
    </ul>用户名:
    <span>{{ username }}</span>
    <br>数字:
    <span>{{count}}</span>
    <!-- 路由出口 -->
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
export default {
  name: 'user',
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
    increment() {
      this.$store.commit('increment')
      console.log(this.$store.state.count)
    }
  }
}
</script>

<style></style>
