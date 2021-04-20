import Layout from '@/layout/index'

const elementRoutes = {
  path: '/element-ui',
  component: Layout,
  children: [
    { path: '', component: () => import('@/views/ElementUI/index') },
    {
      path: 'form',
      component: () => import(`@/views/ElementUI/form/index`),
    },
    {
      path: 'dialog',
      component: () => import('@/views/ElementUI/dialog/index'),
    },
    {
      path: 'input',
      component: () => import('@/views/ElementUI/input/index.vue'),
    },
    {
      path: 'layout',
      component: () => import('@/views/ElementUI/layout/index.vue'),
    },
    {
      path: 'pagination',
      component: () => import('@/views/ElementUI/pagination/index'),
    },
    {
      path: 'popover',
      component: () => import('@/views/ElementUI/popover'),
    },
    {
      path: 'steps',
      component: () => import('@/views/ElementUI/steps/index'),
    },
    {
      path: 'tabs',
      component: () => import('@/views/ElementUI/tabs/index'),
    },
    {
      path: 'table',
      component: () => import('@/views/ElementUI/table/index'),
    },
    {
      path: 'table2',
      component: () => import('@/views/ElementUI/table/index2'),
    },
    {
      path: 'table3',
      component: () => import('@/views/ElementUI/table/index3'),
    },
  ],
}
export default elementRoutes
