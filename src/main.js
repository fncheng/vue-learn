import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入ant-design-vue
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

import User from './views/User'
import About from '@/views/About/index.vue'

Vue.config.productionTip = false
// 使用ant-design-vue
Vue.use(Antd)
// 全局注册组件
Vue.component('user', User)
Vue.component('about', About)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
