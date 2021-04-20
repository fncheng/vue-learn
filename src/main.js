import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入ant-design-vue
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
// 引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import User from './views/User'
import About from '@/views/About/index.vue'

if (process.env.NODE_ENV === 'development') {
  console.log('开发环境')
} else {
  console.log('生产环境')
}

Vue.config.productionTip = false
// 使用ant-design-vue
Vue.use(Antd)
Vue.use(ElementUI)
// 全局注册组件
Vue.component('user', User)
Vue.component('about', About)

import mixin from './mixins'
// 全局mixin
Vue.mixin(mixin)

// 全局过滤器
Vue.filter('all', () => '1111')

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
