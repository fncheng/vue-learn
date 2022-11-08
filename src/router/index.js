import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/layout/index.vue'
import Home from '@/views/Home'
import Login from '@/views/Login'

import elementRoutes from './modules/element'
import learnVueRoutes from './modules/learnVue'
// import learnVueRoutes from './modules/learnVue'
// 路由入口
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Layout,
  },
  {
    path: '/home',
    name: 'Home',
    component: Layout,
    children: [
      {
        path: '',
        component: Home,
      },
    ],
    meta: {
      title: '主页',
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
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
  // Download 页面
  {
    path: '/dl',
    redirect: '/dl/index',
    component: Layout,
    children: [{ path: 'index', component: () => import('@/views/Download') }],
  },
  // Echarts
  {
    path: '/echart',
    redirect: '/echart/index',
    component: Layout,
    children: [
      {
        path: '/echart/index',
        component: () => import('@/views/Echarts/linechart'),
      },
      { path: '/echart/index2', component: () => import('@/views/Echarts/index2') },
      { path: '/echart/index3', component: () => import('@/views/Echarts/index3') },
    ],
  },
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
    path: '/user',
    // component: () => import('../views/User.vue'),
    component: Layout,
    redirect: '/user/test',
    children: [
      { path: 'test', component: () => import('@/views/User') },
      { path: 'profile', component: () => import('../views/UserProfile.vue') },
    ],
  },
  {
    path: '/antdesign',
    component: () => import('@/views/AntDesign'),
  },
  {
    path: '/life',
    redirect: '/life/index',
    component: Layout,
    children: [{ path: '', component: () => import('@/views/LifeCycle') }],
  },
  {
    path: '/mixin',
    redirect: '/mixin',
    component: Layout,
    children: [{ path: '', component: () => import('@/views/Mixin') }],
  },
  {
    path: '/slot',
    redirect: '/slot/index',
    component: Layout,
    children: [{ path: 'index', component: () => import('@/views/Slot') }],
  },
  {
    path: '/test',
    redirect: '/test/index',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/Test/index'),
        meta: {
          title: '测试页',
        },
      },
    ],
  },

  {
    path: '/todomvc',
    redirect: '/todomvc/index',
    component: Layout,
    children: [
      { path: 'index', component: () => import('@/views/todomvc/index') },
    ],
  },
  {
    path: '/tool',
    redirect: '/tool/index',
    component: Layout,
    children: [
      { path: 'index', component: () => import('@/views/Tool/index') },
    ],
  },
  {
    path: '/media',
    redirect: '/media/index',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/Media'),
        meta: {
          keepAlive: true,
        },
      },
    ],
  },
  {
    path: '/xss',
    component: () => import('@/views/xss/index'),
  },
  {
    path: '/redirect',
    redirect: '/redirect/index',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/redirect/index'),
      },
    ],
  },
  // 路由表过长时，可以将其分割成小模块
  elementRoutes,
  learnVueRoutes,
]

const router = new VueRouter({
  routes,
})
let isAuthenticated
// let pathName
router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  let localStorageUserData = JSON.parse(localStorage.getItem('userData'))
  console.log('localStorageUserData: ', localStorageUserData)
  let userData = localStorageUserData
  console.log('userData: ', userData)
  isAuthenticated =
    userData !== null && userData !== '' && userData !== undefined
  console.log('isAuthenticated: ', isAuthenticated)
  // 未验证
  if (!isAuthenticated) {
    // 目标页不是Login,则跳转至Login页
    if (to.name !== 'Login') {
      next('/login')
    } else {
      next()
    }
  }
  // has authenticated
  else {
    next()
  }
  // router.addRoutes([
  //   {
  //     path: `${pathName}`,
  //     // redirect: `${pathName}/index`,
  //     component: Layout,
  //     children: [
  //       { path: 'index', component: () => import(`@/views${pathName}`) },
  //     ],
  //   },
  // ])
  // if (to.path == '/father/index') {
  //   next('/')
  // }
  // console.group('------beforeEach: 全局路由守卫,路由跳转前触发------')
  // next()
})
router.afterEach(() => {
  // to and from are both route objects.
  // console.log('------afterEach: 全局后置守卫,路由跳转后触发------')
  // console.log(router)
})
// router.beforeResolve((to, from, next) => {
//   console.log('------beforeResolve: 全局解析守卫,路由跳转前触发------')
//   next()
// })
// router.addRoutes([
//   {
//     path: '/media',
//     redirect: '/media/index',
//     component: Layout,
//     children: [{ path: 'index', component: () => import('@/views/Slot') }],
//   },
// ])
export default router
