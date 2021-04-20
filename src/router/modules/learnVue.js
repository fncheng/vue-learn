import Layout from '@/layout/index'

const learnVueRoutes = {
  path: '/learnvue',
  redirect: '/learnvue/index',
  component: Layout,
  children: [
    { path: 'index', component: () => import('@/views/LearnVue/index') },
    {
      path: 'communication',
      component: () => import('@/views/LearnVue/Communication/index'),
    },
    {
      path: 'component',
      component: () => import('@/views/LearnVue/Component/index'),
    },
  ],
}
export default learnVueRoutes
