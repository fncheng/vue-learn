import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/layout/index.vue'

// 路由入口
Vue.use(VueRouter)

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
  // Download 页面
  {
    path: '/dl',
    redirect: '/dl/index',
    component: Layout,
    children: [{ path: 'index', component: () => import('@/views/Download') }],
  },
  {
    path: '/echart',
    redirect: '/echart/index',
    component: Layout,
    children: [
      { path: 'index', component: () => import('@/views/Echarts/') },
      { path: 'index2', component: () => import('@/views/Echarts/index2') },
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
  // ElementUI
  {
    path: '/element-ui',
    component: Layout,
    children: [
      { path: '', component: () => import('../views/ElementUI/index') },
      {
        path: 'index2',
        component: () => import('../views/ElementUI/index2'),
      },
      {
        path: 'loading',
        component: () => import('../views/ElementUI/loading'),
      },
      {
        path: 'pagination',
        component: () => import('../views/ElementUI/pagination/index'),
      },
      {
        path: 'table',
        component: () => import('../views/ElementUI/table/index'),
      },
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
    children: [{ path: '', component: () => import('@/views/Test/index') }],
  },
  {
    path: '/tool',
    redirect: '/tool/index',
    component: Layout,
    children: [{ path: '', component: () => import('@/views/Tool/index') }],
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
]

const router = new VueRouter({
  routes,
})

// let pathName
router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  // console.log('to:', to)
  // pathName = to.path
  // console.log('pathName:', pathName)
  // console.log(router)

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
  if (to.path == '/father/index') {
    next('/')
  }
  console.group('------beforeEach: 全局路由守卫,路由跳转前触发------')
  next()
})
router.afterEach(() => {
  // to and from are both route objects.
  console.log('------afterEach: 全局后置守卫,路由跳转后触发------')
  console.log(router)
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
