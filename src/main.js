import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import User from "./views/User";
import About from "./views/About";

Vue.config.productionTip = false;

// 全局注册组件
Vue.component("user", User);
Vue.component("about", About);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
