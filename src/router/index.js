import Vue from 'vue'
import VueRouter from 'vue-router'

// 路由入口
Vue.use(VueRouter)

const Foo = { template: '<div>Foo子组件</div>' }

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/Index.vue')
  },
  {
    path: '/about',
    name: 'myAbout',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  { path: '/index', redirect: '/' },
  {
    path: '/father',
    name: 'Father',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Father.vue')
  },
  {
    path: '/user/:id',
    component: () => import('../views/User.vue'),
    children: [
      { path: 'test', component: Foo }, // 无效
      { path: 'profile', component: () => import('../views/UserProfile.vue') }
    ]
  },
  {
    path: '/antdesign',
    component: () => import('@/views/AntDesign')
  }
]

const router = new VueRouter({
  routes
})

export default router
