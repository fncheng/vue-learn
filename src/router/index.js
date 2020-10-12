import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/layout/index.vue'

// 路由入口
Vue.use(VueRouter)

const Foo = { template: '<div>Foo子组件</div>' }

const routes = [
  {
    path: '/',
    name: 'index',
    component: Layout,
  },
  {
    path: '/about',
    name: 'myAbout',
    redirect: '/about/index',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Layout,
    beforeEnter: (to, from, next) => {
      // ...
      console.log('------beforeEnter: 路由独享的守卫------')
      next()
    },
    children: [
      {
        path: 'index',
        component: () =>
          import(/* webpackChunkName: "about" */ '@/views/About/index.vue'),
      },
    ],
  },
  { path: '/index', redirect: '/' },
  {
    path: '/father',
    name: 'Father',
    redirect: '/father/index',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/Father'),
        meta: {
          keepAlive: true,
        },
      },
    ],
  },
  {
    path: '/user/:id',
    component: () => import('../views/User.vue'),
    children: [
      { path: 'test', component: Foo }, // 无效
      { path: 'profile', component: () => import('../views/UserProfile.vue') },
    ],
  },
  {
    path: '/element-ui',
    component: () => import('../views/ElementUI/index'),
  },
  {
    path: '/antdesign',
    component: () => import('@/views/AntDesign'),
  },
  {
    path: '/slot',
    redirect: '/slot/index',
    component: Layout,
    children: [{ path: 'index', component: () => import('@/views/Slot') }],
  },
  {
    path: '/mixin',
    redirect: '/mixin',
    component: Layout,
    children: [{ path: '', component: () => import('@/views/Mixin') }],
  },
]

const router = new VueRouter({
  routes,
})
router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  if (to.path == '/father') {
    next('/')
  }
  console.group('------beforeEach: 全局路由守卫,路由跳转前触发------')
  next()
})
router.afterEach(() => {
  // to and from are both route objects.
  console.log('------afterEach: 全局后置守卫,路由跳转后触发------')
})
router.beforeResolve((to, from, next) => {
  console.log('------beforeResolve: 全局解析守卫,路由跳转前触发------')
  next()
})

export default router
