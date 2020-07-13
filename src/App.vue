<template>
  <div id="app">
    <user
      v-for="(item, index) in list"
      :myname="item.proname"
      :price="item.price"
      :info="item.info"
      :key="index"
    ></user>
    <about @countChange="updateCount"></about>
    我是兄弟组件:<userprofile></userprofile>
    <p>我是父组件: {{ mainCount }}</p>
    <div id="nav">
      <router-link to="/">Index</router-link> |
      <router-link :to="{ name: 'myAbout' }">About</router-link> |
      <router-link to="/user/foo">User</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
import User from "./views/User"
import About from "./views/About"
import UserProfile from "./views/UserProfile"
export default {
  name: "App",
  data() {
    return {
      list: [
        { id: 1, proname: "苹果", price: 8, info: "apple" },
        { id: 2, proname: "香蕉", price: 6, info: "banana" }
      ],
      // mainCount用来接收子组件传过来的参数count
      mainCount: 0
    }
  },
  methods: {
    updateCount(count) {
      this.mainCount = count
      console.log(count)
    }
  },
  // 局部注册组件
  components: {
    user: User,
    about: About,
    userprofile: UserProfile
  }
}
</script>

<style lang="scss">
ul,
li {
  list-style: none;
  text-decoration: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
