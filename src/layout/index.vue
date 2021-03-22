<template>
  <div class="index">
    <!-- <header>
      <router-link to="/father">Father</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/slot">Slot</router-link> |
      <router-link to="/mixin">Mixin</router-link> |
      <router-link to="/element-ui">ElementUI</router-link> |
      <router-link to="/life">LifeCycle</router-link> |
      <router-link to="/echart">Echart</router-link> |
    </header> -->
    <routerNav></routerNav>
    <div id="main-content">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive">
          <!-- 这里是会被缓存的视图组件，比如 Home！ -->
        </router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive">
        <!-- 这里是不被缓存的视图组件，比如 Edit！ -->
      </router-view>
    </div>
  </div>
</template>

<script>
// import { getAllFiles } from "../Api/api"
// import service from "../utils/util"
import routerNav from './routerNav'
export default {
  name: 'Layout',
  components: {
    routerNav
  },
  created() {
    // 创建axios实例,然后通过实例直接调用axios身上的方法
    // service.get("https://gonelist.cugxuan.cn/onedrive/getallfiles")
    // service({
    //   method: "GET"
    // })
    //   .then(result => {
    //     console.log(result)
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   })
    // ------------等效于------------
    // getAllFiles("https://gonelist.cugxuan.cn", "/").then(res =>
    //   console.log(("res:", res))
    // )
    // js-cookie
    // Cookies.set("name", "zs")
  }
  // beforeRouteEnter(to, from, next) {
  //   // ...
  //   console.group('----beforeRouteEnter: Index组件前置守卫----')
  //   next()
  // },
  // beforeRouteUpdate(to, from, next) {
  //   console.log('----beforeRouteUpdate: Index组件更新守卫----')
  //   next()
  // },
  // beforeRouteLeave(to, from, next) {
  //   // ...
  //   console.log('----beforeRouteLeave: Index组件后置守卫----')
  //   next()
  // }
}
</script>

<style>
body {
  height: 100%;
}
header {
  margin-top: 20px;
  margin-bottom: 40px;
}
</style>
